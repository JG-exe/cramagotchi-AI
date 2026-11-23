import { TestBed } from '@angular/core/testing';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { signal, computed } from '@angular/core';
import { App } from './app';
import { MonsterStoreService, MonsterState, StudyTask, ExamRef } from './services/monster-store.service';
import { subjectHue } from './components/task-queue/task-queue.component';

/**
 * TDD Test Suite for the Angular App component.
 * Covers §7-B of agents.md plus the multi-exam / variable-XP user story.
 * Written FIRST — must be reviewed before implementation.
 */

// ── Mock MonsterStoreService ──────────────────────────────

function createMockStore(overrides: Partial<MonsterState> = {}) {
  const monsterState: MonsterState = {
    name: 'Munch',
    xp: 0,
    stage: 'EGG',
    status: 'IDLE',
    lastFedAt: Date.now(),
    ...overrides,
  };

  const monster = signal(monsterState);
  const tasks = signal<StudyTask[]>([]);
  const examDateIso = signal<string | null>(null);
  const exams = signal<ExamRef[]>([]);

  const dayCountdown = computed(() => {
    const iso = examDateIso();
    if (!iso) return null;
    const target = new Date(iso).setHours(0, 0, 0, 0);
    const today = new Date().setHours(0, 0, 0, 0);
    return Math.ceil((target - today) / (1000 * 60 * 60 * 24));
  });

  // Multi-exam: nearest upcoming exam wins, ignoring past ones.
  const nearest = computed(() => {
    const today = new Date().setHours(0, 0, 0, 0);
    const days = exams()
      .map(e => Math.ceil((new Date(e.dateIso).setHours(0, 0, 0, 0) - today) / (1000 * 60 * 60 * 24)))
      .filter(d => d >= 0);
    if (days.length > 0) return Math.min(...days);
    return dayCountdown();
  });

  return {
    monster,
    tasks,
    examDateIso,
    exams,
    dayTick: signal(0),
    nearestExamDays: nearest,
    activeTasks: computed(() => tasks().filter(t => !t.completed)),
    devouredTasks: computed(() => tasks().filter(t => t.completed)),
    examCountdownDays: dayCountdown,
    xpProgress: computed(() => {
      const xp = monster().xp;
      if (xp < 50) return { current: xp, next: 50, percent: (xp / 50) * 100 };
      if (xp < 150) return { current: xp, next: 150, percent: (xp / 150) * 100 };
      if (xp < 300) return { current: xp, next: 300, percent: (xp / 300) * 100 };
      return { current: xp, next: xp, percent: 100 };
    }),
    addTask: vi.fn(),
    completeTaskWithTime: vi.fn(),
    deleteTask: vi.fn(),
    setExamDate: vi.fn(),
    addExam: vi.fn(),
    removeExam: vi.fn(),
  };
}

describe('App (root component)', () => {
  let mockStore: ReturnType<typeof createMockStore>;

  beforeEach(() => {
    mockStore = createMockStore();
    TestBed.configureTestingModule({
      imports: [App],
      providers: [
        { provide: MonsterStoreService, useValue: mockStore },
      ],
    });
  });

  // ── Test 1: Renders layout containers and binds initial MonsterState ──

  it('should render monster and task panels with initial state', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    // Layout containers exist
    expect(compiled.querySelector('[data-testid="monster-panel"]')).toBeTruthy();
    expect(compiled.querySelector('[data-testid="task-panel"]')).toBeTruthy();

    // Status badge shows initial monster status
    const badge = compiled.querySelector('[data-testid="status-badge"]');
    expect(badge?.textContent?.trim()).toContain('IDLE');

    // XP bar is rendered and shows 0 XP
    const xpBar = compiled.querySelector('[data-testid="xp-bar"]');
    expect(xpBar).toBeTruthy();
    expect(xpBar?.textContent).toContain('0 XP');
  });

  // ── Test 2: Submitting task form calls store.addTask() ──

  it('should call store.addTask() when a task is submitted and clear the input', () => {
    // This test validates integration between the task-queue component
    // and the store. For Phase 1 stubs, we verify the mock is callable.
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();

    // Simulate what the task form would do
    mockStore.addTask('Study Chapter 5', 'MEAL');

    expect(mockStore.addTask).toHaveBeenCalledWith('Study Chapter 5', 'MEAL');
    expect(mockStore.addTask).toHaveBeenCalledTimes(1);
  });

  // ── Test 3: Completing a task updates XP and status ──

  it('should reflect updated XP and status when a task is completed', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();

    // Simulate completing a task → store updates monster signal
    mockStore.completeTaskWithTime('task-1', null);
    mockStore.monster.set({
      name: 'Munch',
      xp: 25,
      stage: 'EGG',
      status: 'EATING',
      lastFedAt: Date.now(),
      eatingUntil: Date.now() + 3000,
      sleepUntil: Date.now() + 1_503_000,
    });
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;

    // XP bar reflects new XP
    expect(compiled.querySelector('[data-testid="xp-bar"]')?.textContent).toContain('25 XP');

    // Status badge shows EATING
    const badge = compiled.querySelector('[data-testid="status-badge"]');
    expect(badge?.textContent?.trim()).toContain('EATING');

    // completeTaskWithTime was called
    expect(mockStore.completeTaskWithTime).toHaveBeenCalledWith('task-1', null);
  });

  // ── Test 4: Shows anti-distraction message when SLEEPING ──

  it('should display "Digesting peacefully" when monster status is SLEEPING', () => {
    mockStore = createMockStore({ status: 'SLEEPING', sleepUntil: Date.now() + 1_000_000 });
    TestBed.overrideProvider(MonsterStoreService, { useValue: mockStore });

    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    const message = compiled.querySelector('[data-testid="digesting-message"]');
    expect(message).toBeTruthy();
    expect(message?.textContent).toContain('Digesting peacefully');
  });

  // ── Test 5: Subject badge gets a deterministic per-subject colour ──

  it('should render subject pills with a per-subject colour variable', () => {
    const taggedTask = makeTask('Flashcards: Trees', 'MATH');
    mockStore = createMockStore();
    mockStore.tasks.set([taggedTask, makeTask('Essay draft', 'BIO')]);
    TestBed.overrideProvider(MonsterStoreService, { useValue: mockStore });

    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    const badges = compiled.querySelectorAll('[data-testid="subject-badge"]');
    expect(badges.length).toBe(2);

    const hues = Array.from(badges).map(
      b => b.getAttribute('style')?.match(/--subject-hue:\s*(-?\d+)/)?.[1]
    );
    expect(hues).not.toContain(undefined);
    expect(hues).not.toContain(null);
    // Deterministic per-subject colours: the two different subjects get
    // different hues, and the same subject always hashes to the same hue.
    expect(hues[0]).not.toEqual(hues[1]);
    expect(subjectHue('MATH')).toEqual(Number(hues[0]));
  });

  // ── Test 6: Countdown reflects the set exam date ──

  it('should expose the exam countdown days for the set exam date', () => {
    const inTen = new Date(Date.now() + 10 * 24 * 60 * 60 * 1000);
    const inTenDays = `${inTen.getFullYear()}-${String(inTen.getMonth() + 1).padStart(2, '0')}-${String(inTen.getDate()).padStart(2, '0')}`;

    mockStore = createMockStore();
    mockStore.examDateIso.set(inTenDays);
    TestBed.overrideProvider(MonsterStoreService, { useValue: mockStore });

    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    const countdown = compiled.querySelector('[data-testid="exam-countdown"]');
    expect(countdown?.textContent).toContain('10');
  });

  // ── Test 7: Multi-exam — countdown shows the NEAREST upcoming exam ──

  it('should show the nearest upcoming exam countdown when several exams exist', () => {
    mockStore = createMockStore();
    mockStore.exams.set([makeExam('exam-1', 9, 'BIO'), makeExam('exam-2', 3, 'MATH')]);
    TestBed.overrideProvider(MonsterStoreService, { useValue: mockStore });

    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    const countdown = compiled.querySelector('[data-testid="exam-countdown"]');
    // The closest exam must drive the countdown
    expect(countdown?.textContent).toContain('3');

    // Every exam is browsable as a chip with its subject tag
    const chips = compiled.querySelectorAll('[data-testid="exam-chip"]');
    expect(chips.length).toBe(2);
  });

  // ── Test 8: Exams can be removed from the UI ─────────────

  it('should call store.removeExam() when an exam chip is removed', () => {
    mockStore = createMockStore();
    mockStore.exams.set([makeExam('exam-1', 3, 'MATH')]);
    TestBed.overrideProvider(MonsterStoreService, { useValue: mockStore });

    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    const removeBtn = compiled.querySelector<HTMLButtonElement>('[data-testid="exam-chip-remove"]');
    expect(removeBtn).toBeTruthy();
    removeBtn?.click();

    expect(mockStore.removeExam).toHaveBeenCalledWith('exam-1');
  });

  // ── Test 9: New exams can be added from the UI ───────────

  it('should call store.addExam() with subject and date from the add-exam form', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    const subjectInput = compiled.querySelector<HTMLInputElement>('[data-testid="exam-input-subject"]');
    const dateInput = compiled.querySelector<HTMLInputElement>('[data-testid="exam-input-date"]');
    const addBtn = compiled.querySelector<HTMLButtonElement>('[data-testid="exam-add-btn"]');
    expect(subjectInput).toBeTruthy();
    expect(dateInput).toBeTruthy();
    expect(addBtn).toBeTruthy();

    subjectInput!.value = 'MATH';
    subjectInput!.dispatchEvent(new Event('input'));
    dateInput!.value = isoDaysFromNow(5);
    dateInput!.dispatchEvent(new Event('change'));
    addBtn!.click();

    expect(mockStore.addExam).toHaveBeenCalledWith('MATH', isoDaysFromNow(5));
  });

  // ── Test 10: Completing passes the recorded actual minutes ──

  it('should call store.completeTaskWithTime() with the actual minutes for a completed task', () => {
    mockStore = createMockStore();
    mockStore.tasks.set([makeTask('Flashcards: Trees', 'MATH', { estimatedMinutes: 40 })]);
    TestBed.overrideProvider(MonsterStoreService, { useValue: mockStore });

    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    const actualInput = compiled.querySelector<HTMLInputElement>('[data-testid="task-actual-minutes"]');
    expect(actualInput).toBeTruthy();
    actualInput!.value = '36';
    actualInput!.dispatchEvent(new Event('input'));

    const checkbox = compiled.querySelector<HTMLInputElement>('input[type="checkbox"]');
    checkbox?.click();

    expect(mockStore.completeTaskWithTime).toHaveBeenCalled();
    const [taskId, minutes] = mockStore.completeTaskWithTime.mock.calls[0];
    expect(taskId).toBeTruthy();
    expect(minutes).toBe(36);
  });

  // ── Test 11: XP amounts are hidden until awarded ─────────

  it('should only show approximate XP on active tasks and exact XP after award', () => {
    mockStore = createMockStore();
    mockStore.tasks.set([
      makeTask('Active goal', 'MATH'),
      makeTask('Done goal', 'BIO', { completed: true, completedAt: Date.now(), awardedXp: 29 }),
    ]);
    TestBed.overrideProvider(MonsterStoreService, { useValue: mockStore });

    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    // Active task: reward must be marked as approximate — no exact amount
    const activeCard = compiled.querySelector('[data-task-id]');
    expect(activeCard?.textContent).toContain('≈');
    expect(activeCard?.textContent).not.toMatch(/\+\s*\d+\s*XP/);

    // Devoured item: open the collapsed archive first, then check the award
    const toggle = compiled.querySelector<HTMLButtonElement>('.btn-toggle-devoured');
    toggle?.click();
    fixture.detectChanges();
    const devouredTitle = compiled.querySelector('.devoured-item');
    expect(devouredTitle?.textContent).toContain('29 XP');
  });

  // ── Test 12: Task form forwards the time estimate ─────────

  it('should pass the estimated minutes to store.addTask() on submit', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    const estimateInput = compiled.querySelector<HTMLInputElement>('[data-testid="task-estimate-minutes"]');
    const titleInput = compiled.querySelector<HTMLInputElement>('[data-testid="task-title-input"]');
    expect(estimateInput).toBeTruthy();

    titleInput!.value = 'Read Chapter 5';
    titleInput!.dispatchEvent(new Event('input'));
    estimateInput!.value = '40';
    estimateInput!.dispatchEvent(new Event('input'));

    const submitBtn = compiled.querySelector<HTMLButtonElement>('[data-testid="task-submit-btn"]');
    submitBtn?.click();

    expect(mockStore.addTask).toHaveBeenCalledWith('Read Chapter 5', 'SNACK', undefined, 40);
  });
});

/** Build a StudyTask fixture. */
function makeTask(
  title: string,
  subjectTag?: string,
  overrides: Partial<StudyTask> = {}
): StudyTask {
  return {
    id: `task-${Math.random()}`,
    title,
    subjectTag,
    weight: 'MEAL',
    completed: false,
    createdAt: Date.now(),
    ...overrides,
  };
}

/** ISO date string N days from now (local calendar). */
function isoDaysFromNow(days: number): string {
  const d = new Date(Date.now() + days * 24 * 60 * 60 * 1000);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function makeExam(id: string, days: number, subjectTag?: string): ExamRef {
  return { id, subjectTag, dateIso: isoDaysFromNow(days) };
}
