import { TestBed } from '@angular/core/testing';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { signal, computed } from '@angular/core';
import { App } from './app';
import { MonsterStoreService, MonsterState, StudyTask, ExamRef, CollectedMonster } from './services/monster-store.service';

/**
 * Invalid-submit feedback animations (frontend motion spec):
 *  - a rejected submit shakes the offending field (`.invalid-flash`) and
 *    keeps it highlighted with the warning colour while the error shows;
 *  - the add/submit button shakes and flashes red for one cycle;
 *  - with a required input empty the submit button is inactive
 *    (`.btn-submit-inactive`, dimmed but still clickable so the press can
 *    explain what is missing); with the input present it activates.
 */

function createMockStore() {
  const monsterState: MonsterState = {
    name: 'Munch',
    xp: 0,
    stage: 'EGG',
    status: 'IDLE',
    lastFedAt: Date.now(),
  };

  const monster = signal(monsterState);
  const tasks = signal<StudyTask[]>([]);
  const exams = signal<ExamRef[]>([]);

  return {
    monster,
    tasks,
    exams,
    dayTick: signal(0),
    celebrateTick: signal(0),
    nearestExamDays: computed(() => null),
    nearestUpcomingExam: computed(() => null),
    activeTasks: computed(() => tasks().filter(t => !t.completed)),
    devouredTasks: computed(() => tasks().filter(t => t.completed)),
    xpProgress: computed(() => ({ current: 0, next: 50, percent: 0 })),
    addTask: vi.fn(),
    updateTask: vi.fn(),
    completeTaskWithTime: vi.fn(),
    deleteTask: vi.fn(),
    isDevouredExpired: vi.fn(() => false),
    addExam: vi.fn(),
    updateExam: vi.fn(),
    removeExam: vi.fn(),
    finishExam: vi.fn(),
    collection: signal<CollectedMonster[]>([]),
  };
}

type MockStore = ReturnType<typeof createMockStore>;

function setInput(el: HTMLInputElement, value: string): void {
  el.value = value;
  el.dispatchEvent(new Event('input'));
  el.dispatchEvent(new Event('change'));
}

describe('Invalid-submit feedback animations', () => {
  let mockStore: MockStore;

  beforeEach(() => {
    mockStore = createMockStore();
    TestBed.configureTestingModule({
      imports: [App],
      providers: [{ provide: MonsterStoreService, useValue: mockStore }],
    });
  });

  // ── Task add form ──────────────────────────────────────────────────

  it('shakes the title field and the submit button when the title is empty', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    const before = mockStore.addTask.mock.calls.length;
    compiled.querySelector<HTMLButtonElement>('[data-testid="task-submit-btn"]')!.click();
    fixture.detectChanges();

    expect(mockStore.addTask.mock.calls.length).toBe(before);

    const titleField = compiled.querySelector('.field-title-wrap .soft-field')!;
    expect(titleField).toBeTruthy();
    expect(titleField.classList).toContain('invalid-flash'); // shakes
    expect(titleField.classList).toContain('alert-field');  // warning outline while error shows

    const submitBtn = compiled.querySelector<HTMLButtonElement>('[data-testid="task-submit-btn"]')!;
    expect(submitBtn.classList).toContain('invalid-flash'); // shakes + red for a moment
  });

  it('keeps the title field visually highlighted while the error is showing, then clears it', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    compiled.querySelector<HTMLButtonElement>('[data-testid="task-submit-btn"]')!.click();
    fixture.detectChanges();
    expect(compiled.querySelector('.field-title-wrap .soft-field')!.classList).toContain('alert-field');
    expect(compiled.querySelector('[data-testid="task-form-error"]')).toBeTruthy();

    // Typing a name clears the rejection and the warning highlight
    setInput(compiled.querySelector<HTMLInputElement>('[data-testid="task-title-input"]')!, 'Read chapter');
    fixture.detectChanges();
    expect(compiled.querySelector('.field-title-wrap .soft-field')!.classList).not.toContain('alert-field');
    expect(compiled.querySelector('[data-testid="task-form-error"]')).toBeNull();
  });

  it('shows the add button as inactive while the title is empty and active once present', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    const submitBtn = compiled.querySelector<HTMLButtonElement>('[data-testid="task-submit-btn"]')!;
    expect(submitBtn.classList).toContain('btn-submit-inactive');
    expect(submitBtn.disabled).toBe(false); // clickable so the press can explain the rejection

    setInput(compiled.querySelector<HTMLInputElement>('[data-testid="task-title-input"]')!, 'Read chapter');
    fixture.detectChanges();

    expect(submitBtn.classList).not.toContain('btn-submit-inactive');
    expect(mockStore.addTask).not.toHaveBeenCalled(); // only wired up on submit
  });

  // ── Exam add form ──────────────────────────────────────────────────

  it('shakes the date field and the add button when the exam date is missing or invalid', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    setInput(compiled.querySelector<HTMLInputElement>('[data-testid="exam-input-subject"]')!, 'MATH');
    compiled.querySelector<HTMLButtonElement>('[data-testid="exam-add-btn"]')!.click();
    fixture.detectChanges();

    const dateField = compiled.querySelector('.field-exam-date-wrap .soft-field')!;
    expect(dateField.classList).toContain('invalid-flash');
    expect(dateField.classList).toContain('alert-field');

    const addBtn = compiled.querySelector<HTMLButtonElement>('[data-testid="exam-add-btn"]')!;
    expect(addBtn.classList).toContain('invalid-flash');
    // Only the offending field shakes — the name field stays calm
    expect(compiled.querySelector('.field-exam-subject-wrap .soft-field')!.classList)
      .not.toContain('invalid-flash');
    expect(mockStore.addExam).not.toHaveBeenCalled();
  });

  it('shows the exam add button as inactive until both a name and a valid date are present', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    const addBtn = compiled.querySelector<HTMLButtonElement>('[data-testid="exam-add-btn"]')!;
    expect(addBtn.classList).toContain('btn-submit-inactive');

    // Name alone is not enough — a dated commitment needs the date too
    setInput(compiled.querySelector<HTMLInputElement>('[data-testid="exam-input-subject"]')!, 'MATH');
    fixture.detectChanges();
    expect(addBtn.classList).toContain('btn-submit-inactive');

    // Still inactive with a garbage date
    setInput(compiled.querySelector<HTMLInputElement>('[data-testid="exam-input-date"]')!, '2026-02-30');
    fixture.detectChanges();
    expect(addBtn.classList).toContain('btn-submit-inactive');
    expect(addBtn.disabled).toBe(false);

    // Real calendar date → active, and a press goes through to the engine
    setInput(compiled.querySelector<HTMLInputElement>('[data-testid="exam-input-date"]')!, '2026-02-28');
    fixture.detectChanges();
    expect(addBtn.classList).not.toContain('btn-submit-inactive');
    compiled.querySelector<HTMLButtonElement>('[data-testid="exam-add-btn"]')!.click();
    expect(mockStore.addExam).toHaveBeenCalledWith('MATH', '2026-02-28', 'DEADLINE', null);
  });

  // ── Exam edit form ─────────────────────────────────────────────────

  it('shakes the edit fields and save button when the exam name is blanked', () => {
    mockStore.exams.set([{ id: 'exam-1', subjectTag: 'BIO', dateIso: '2026-12-11', kind: 'DEADLINE' }]);
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    compiled.querySelector<HTMLButtonElement>('[data-testid="exam-chip-edit"]')!.click();
    fixture.detectChanges();

    setInput(compiled.querySelector<HTMLInputElement>('[data-testid="exam-edit-subject"]')!, '');
    compiled.querySelector<HTMLButtonElement>('[data-testid="exam-edit-save"]')!.click();
    fixture.detectChanges();

    expect(compiled.querySelector('.field-exam-subject-wrap .soft-field')!.classList)
      .toContain('invalid-flash');
    expect(compiled.querySelector('[data-testid="exam-edit-save"]')!.classList)
      .toContain('invalid-flash');
    expect(mockStore.updateExam).not.toHaveBeenCalled();
  });
});
