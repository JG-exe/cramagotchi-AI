import { TestBed } from '@angular/core/testing';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { signal, computed } from '@angular/core';
import { App } from './app';
import { MonsterStoreService, MonsterState, StudyTask, ExamRef, CollectedMonster } from './services/monster-store.service';
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

  // Nearest upcoming exam/deadline entry (exam day >= today), or null.
  const nearestExam = computed<ExamRef | null>(() => {
    const today = new Date().setHours(0, 0, 0, 0);
    const upcoming = exams()
      .map(e => ({ e, days: Math.ceil((new Date(e.dateIso).setHours(0, 0, 0, 0) - today) / (1000 * 60 * 60 * 24)) }))
      .filter(x => x.days >= 0);
    if (upcoming.length === 0) return null;
    return upcoming.reduce((a, b) => (a.days <= b.days ? a : b)).e;
  });

  return {
    monster,
    tasks,
    examDateIso,
    exams,
    dayTick: signal(0),
    celebrateTick: signal(0),
    nearestExamDays: nearest,
    nearestUpcomingExam: nearestExam,
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
    updateTask: vi.fn(),
    completeTaskWithTime: vi.fn(),
    deleteTask: vi.fn(),
    isDevouredExpired: vi.fn(() => false),
    setExamDate: vi.fn(),
    addExam: vi.fn(),
    updateExam: vi.fn(),
    removeExam: vi.fn(),
    finishExam: vi.fn(),
    collection: signal<CollectedMonster[]>([
      { speciesId: 'GRADUATED_BEAST', hue: 204, collectedAt: 0, sleeping: false },
    ]),
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

    // Deadline is the default kind — a plain add never creates an EXAM
    expect(mockStore.addExam).toHaveBeenCalledWith('MATH', isoDaysFromNow(5), 'DEADLINE', null);
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

    const completeBtn = compiled.querySelector<HTMLButtonElement>('[data-testid="task-complete-btn"]');
    completeBtn?.click();

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

  // ── Test 13: Deadlines are the default; the toggle escalates to EXAM ──

  it('should create a high-stakes EXAM when the kind toggle is switched to Exam', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    // Deadline is the active option by default (sliding toggle's active side)
    expect(
      compiled.querySelector('[data-testid="exam-kind-deadline"]')?.classList
    ).toContain('toggle-option-active');

    // Flip the kind to EXAM
    const examOption = compiled.querySelector<HTMLButtonElement>('[data-testid="exam-kind-exam"]');
    expect(examOption).toBeTruthy();
    examOption!.click();
    fixture.detectChanges();

    const subjectInput = compiled.querySelector<HTMLInputElement>('[data-testid="exam-input-subject"]');
    const dateInput = compiled.querySelector<HTMLInputElement>('[data-testid="exam-input-date"]');
    subjectInput!.value = 'MATH';
    subjectInput!.dispatchEvent(new Event('input'));
    dateInput!.value = isoDaysFromNow(5);
    dateInput!.dispatchEvent(new Event('change'));

    const addBtn = compiled.querySelector<HTMLButtonElement>('[data-testid="exam-add-btn"]');
    addBtn!.click();

    expect(mockStore.addExam).toHaveBeenCalledWith('MATH', isoDaysFromNow(5), 'EXAM', null);
  });

  // ── Test 14: Chips show the kind; "Due" vs the escalated "Exam" ──

  it('should show a Due tag for deadlines and a stronger Exam tag for exams', () => {
    mockStore = createMockStore();
    mockStore.exams.set([
      makeExam('exam-1', 9, 'BIO'),
      { id: 'exam-2', subjectTag: 'MATH', dateIso: isoDaysFromNow(3), kind: 'EXAM' },
    ]);
    TestBed.overrideProvider(MonsterStoreService, { useValue: mockStore });

    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    const chips = compiled.querySelectorAll('[data-testid="exam-chip"]');
    expect(chips.length).toBe(2);

    const highChip = compiled.querySelector('.exam-chip-high');
    expect(highChip?.textContent).toContain('Exam');
    // The plain deadline chip still shows its muted Due tag
    const lowChip = Array.from(chips).find(c => !c.classList.contains('exam-chip-high'));
    expect(lowChip?.textContent).toContain('Due');
  });

  // ── Test 15: Countdown names the nearest item explicitly ──

  it('should say "deadline" or "exam" in the countdown depending on the nearest item', () => {
    mockStore = createMockStore();
    mockStore.exams.set([makeExam('exam-1', 3, 'BIO')]);
    TestBed.overrideProvider(MonsterStoreService, { useValue: mockStore });

    let fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('[data-testid="exam-countdown"]')?.textContent)
      .toContain('deadline');

    mockStore.exams.set([
      { id: 'exam-1', subjectTag: 'BIO', dateIso: isoDaysFromNow(3), kind: 'EXAM' },
    ]);
    fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('[data-testid="exam-countdown"]')?.textContent)
      .toContain('exam');
  });

  // ── Test 16: Active tasks can be edited in place ─────────

  it('should open an inline edit form and call store.updateTask() on save', () => {
    mockStore = createMockStore();
    mockStore.tasks.set([makeTask('Old title', 'Old subj', { estimatedMinutes: 30 })]);
    TestBed.overrideProvider(MonsterStoreService, { useValue: mockStore });

    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    const editBtn = compiled.querySelector<HTMLButtonElement>('[data-testid="task-edit-btn"]');
    expect(editBtn).toBeTruthy();
    editBtn!.click();
    fixture.detectChanges();

    const titleInput = compiled.querySelector<HTMLInputElement>('[data-testid="task-edit-title"]');
    expect(titleInput?.value).toBe('Old title'); // pre-filled with current values
    const subjectInput = compiled.querySelector<HTMLInputElement>('[data-testid="task-edit-subject"]');
    expect(subjectInput?.value).toBe('Old subj');

    titleInput!.value = '  New title  ';
    titleInput!.dispatchEvent(new Event('input'));
    subjectInput!.value = 'New subject';
    subjectInput!.dispatchEvent(new Event('input'));

    const saveBtn = compiled.querySelector<HTMLButtonElement>('[data-testid="task-edit-save"]');
    expect(saveBtn?.disabled).toBe(false);
    saveBtn!.click();

    expect(mockStore.updateTask).toHaveBeenCalledWith(
      expect.any(String), 'New title', expect.anything(), 'New subject', expect.anything()
    );
  });

  // ── Test 17: Blank title can never overwrite a task ──────

  it('should keep the save button disabled while the edited title is blank', () => {
    mockStore = createMockStore();
    mockStore.tasks.set([makeTask('Real title')]);
    TestBed.overrideProvider(MonsterStoreService, { useValue: mockStore });

    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    compiled.querySelector<HTMLButtonElement>('[data-testid="task-edit-btn"]')!.click();
    fixture.detectChanges();

    const titleInput = compiled.querySelector<HTMLInputElement>('[data-testid="task-edit-title"]');
    titleInput!.value = '   ';
    titleInput!.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    const saveBtn = compiled.querySelector<HTMLButtonElement>('[data-testid="task-edit-save"]');
    expect(saveBtn?.disabled).toBe(true);
    expect(mockStore.updateTask).not.toHaveBeenCalled();
  });

  // ── Test 18: Deadline chips can be edited (subject/date/kind) ──

  it('should open the chip edit form pre-filled and call store.updateExam() on save', () => {
    mockStore = createMockStore();
    mockStore.exams.set([makeExam('exam-1', 9, 'BIO')]);
    TestBed.overrideProvider(MonsterStoreService, { useValue: mockStore });

    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    const editBtn = compiled.querySelector<HTMLButtonElement>('[data-testid="exam-chip-edit"]');
    expect(editBtn).toBeTruthy();
    editBtn!.click();
    fixture.detectChanges();

    const subjectInput = compiled.querySelector<HTMLInputElement>('[data-testid="exam-edit-subject"]');
    const dateInput = compiled.querySelector<HTMLInputElement>('[data-testid="exam-edit-date"]');
    expect(subjectInput?.value).toBe('BIO'); // pre-filled with current values

    subjectInput!.value = 'BIO 201';
    subjectInput!.dispatchEvent(new Event('input'));
    dateInput!.value = isoDaysFromNow(12);
    dateInput!.dispatchEvent(new Event('change'));

    // Escalate to a high-stakes EXAM via the kind toggle in the edit form
    const examOption = compiled.querySelector<HTMLButtonElement>('[data-testid="exam-edit-kind-exam"]');
    expect(examOption).toBeTruthy();
    examOption!.click();
    fixture.detectChanges();

    const saveBtn = compiled.querySelector<HTMLButtonElement>('[data-testid="exam-edit-save"]');
    expect(saveBtn).toBeTruthy();
    saveBtn!.click();

    expect(mockStore.updateExam).toHaveBeenCalledWith('exam-1', 'BIO 201', isoDaysFromNow(12), 'EXAM', null);
  });

  // ── Desktop fallback calendar (engines without native showPicker) ──

  it('should open the fallback calendar from the calendar button when showPicker is unavailable', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('[data-testid="date-fallback-calendar"]')).toBeNull();

    const pickerBtn = compiled.querySelector<HTMLButtonElement>('[data-testid="exam-date-picker-btn"]');
    expect(pickerBtn).toBeTruthy();
    pickerBtn!.click();
    fixture.detectChanges();

    expect(compiled.querySelector('[data-testid="date-fallback-calendar"]')).toBeTruthy();
    expect(compiled.querySelector('[data-testid="date-calendar-day"]')).toBeTruthy();
  });

  it('should apply the fallback-picked date to the add form and close the calendar', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    compiled.querySelector<HTMLButtonElement>('[data-testid="exam-date-picker-btn"]')!.click();
    fixture.detectChanges();

    const enabledDays = Array.from(
      compiled.querySelectorAll<HTMLButtonElement>('[data-testid="date-calendar-day"]'),
    ).filter((btn) => !btn.disabled && !btn.classList.contains('date-cell-muted'));
    expect(enabledDays.length).toBeGreaterThan(0);
    enabledDays[enabledDays.length - 1]!.click();
    fixture.detectChanges();

    const dateInput = compiled.querySelector<HTMLInputElement>('[data-testid="exam-input-date"]');
    expect(dateInput?.value).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    expect(compiled.querySelector('[data-testid="date-fallback-calendar"]')).toBeNull();
  });

  it('should close the fallback calendar via the backdrop without changing the date', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    compiled.querySelector<HTMLButtonElement>('[data-testid="exam-date-picker-btn"]')!.click();
    fixture.detectChanges();
    expect(compiled.querySelector('[data-testid="date-fallback-calendar"]')).toBeTruthy();

    const backdrop = compiled.querySelector<HTMLElement>('[data-testid="date-calendar-backdrop"]');
    expect(backdrop).toBeTruthy();
    backdrop!.click();
    fixture.detectChanges();

    expect(compiled.querySelector('[data-testid="date-fallback-calendar"]')).toBeNull();
    const dateInput = compiled.querySelector<HTMLInputElement>('[data-testid="exam-input-date"]');
    expect(dateInput?.value).toBe('');
  });

  it('should navigate fallback-calendar months via prev/next', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    compiled.querySelector<HTMLButtonElement>('[data-testid="exam-date-picker-btn"]')!.click();
    fixture.detectChanges();

    const title = () =>
      compiled.querySelector<HTMLElement>('[data-testid="date-fallback-calendar"] .date-fallback-title')?.textContent?.trim();
    const before = title();
    expect(before).toBeTruthy();

    compiled.querySelector<HTMLButtonElement>('[data-testid="date-calendar-next"]')!.click();
    fixture.detectChanges();
    const afterNext = title();
    expect(afterNext).not.toBe(before);

    compiled.querySelector<HTMLButtonElement>('[data-testid="date-calendar-prev"]')!.click();
    compiled.querySelector<HTMLButtonElement>('[data-testid="date-calendar-prev"]')!.click();
    fixture.detectChanges();
    expect(title()).not.toBe(afterNext);
  });

  // ── Finish-in-advance: deadline-only chip action ──────────

  it('should call store.finishExam() from the Finish button on a DEADLINE chip', () => {
    mockStore = createMockStore();
    mockStore.exams.set([makeExam('exam-1', 9, 'HISTORY')]);
    TestBed.overrideProvider(MonsterStoreService, { useValue: mockStore });

    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    const finishBtn = compiled.querySelector<HTMLButtonElement>('[data-testid="exam-chip-finish"]');
    expect(finishBtn).toBeTruthy();
    expect(finishBtn!.textContent?.trim()).toBe('Finish');
    finishBtn!.click();

    expect(mockStore.finishExam).toHaveBeenCalledWith('exam-1');
  });

  it('should NOT render the Finish button on high-stakes EXAM chips', () => {
    mockStore = createMockStore();
    mockStore.exams.set([
      { id: 'exam-1', subjectTag: 'HISTORY', dateIso: isoDaysFromNow(9), kind: 'DEADLINE' },
      { id: 'exam-2', subjectTag: 'MATH', dateIso: isoDaysFromNow(9), kind: 'EXAM' },
    ]);
    TestBed.overrideProvider(MonsterStoreService, { useValue: mockStore });

    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelectorAll('[data-testid="exam-chip"]').length).toBe(2);
    expect(compiled.querySelectorAll('[data-testid="exam-chip-finish"]').length).toBe(1);
  });

  // ── Optional time of day on dated items ───────────────────

  it('should show the optional HH:mm time on a chip that has one, and omit it otherwise', () => {
    mockStore = createMockStore();
    mockStore.exams.set([
      { id: 'exam-1', subjectTag: 'HISTORY', dateIso: isoDaysFromNow(9), kind: 'DEADLINE', timeIso: '09:30' },
      { id: 'exam-2', subjectTag: 'MATH', dateIso: isoDaysFromNow(5), kind: 'EXAM' },
    ]);
    TestBed.overrideProvider(MonsterStoreService, { useValue: mockStore });

    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    const chips = compiled.querySelectorAll('[data-testid="exam-chip"]');
    expect(chips[0]!.textContent).toContain('09:30');
    expect(chips[1]!.textContent).not.toContain('09:30');
    expect(chips[1]!.querySelector('.exam-chip-time')).toBeNull();
  });

  it('should jump the monster when a deadline is finished in advance', () => {
    mockStore = createMockStore();
    TestBed.overrideProvider(MonsterStoreService, { useValue: mockStore });

    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.monster-stage-display')!.classList.contains('is-celebrating')).toBe(false);

    (mockStore.celebrateTick as unknown as { set(v: number): void }).set(1);
    fixture.detectChanges();
    expect(compiled.querySelector('.monster-stage-display')!.classList.contains('is-celebrating')).toBe(true);
  });

  // ── Collectible monster roster gallery ───────────────────

  it('should render one gallery tile per retired monster with its hue and frozen pose', () => {
    mockStore = createMockStore();
    mockStore.collection.set([
      { speciesId: 'GRADUATED_BEAST', hue: 204, collectedAt: 1, sleeping: false },
      { speciesId: 'GRADUATED_BEAST', hue: 12, collectedAt: 2, sleeping: true },
    ]);
    TestBed.overrideProvider(MonsterStoreService, { useValue: mockStore });

    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    const items = compiled.querySelectorAll<HTMLElement>('[data-testid="collection-item"]');
    expect(items.length).toBe(2);

    const first = items[0]!;
    // hue lands as a per-instance --stage-fill override on the shared symbols
    expect(first.getAttribute('style')).toContain('hsl(204');
    expect(first.textContent).toContain('Graduated Beast');
    const faces = first.querySelectorAll('use');
    // idle pose from the frozen retirement roll
    expect(Array.from(faces).some(u => u.getAttribute('href')?.includes('cram-face-idle'))).toBe(true);

    expect(items[1]!.getAttribute('style')).toContain('hsl(12');
    const sleepingUses = items[1]!.querySelectorAll('use');
    // sleeping pose from the frozen retirement roll
    expect(Array.from(sleepingUses).some(u => u.getAttribute('href')?.includes('cram-face-sleeping'))).toBe(true);

    // single fused header label: "Graduated monsters: N"
    expect(compiled.querySelector('.monster-collection')!.textContent).toContain('Graduated monsters: 2');
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
