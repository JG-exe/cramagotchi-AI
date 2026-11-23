import { TestBed } from '@angular/core/testing';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { signal, computed } from '@angular/core';
import { App } from './app';
import { MonsterStoreService, MonsterState, StudyTask, ExamRef } from './services/monster-store.service';
import { isValidIsoDate, formatExamDateDisplay } from './components/exam-portfolio/exam-portfolio.component';

/**
 * Invalid & edge-case input guards, exercised through the real DOM event
 * flow (set input value → dispatch events → submit) like app.spec.ts.
 *
 * Covers:
 *  - Exam form: empty / malformed date strings must never reach addExam().
 *  - Task form: empty title, garbage / negative / zero estimates must never
 *    reach addTask() as an estimate.
 *  - Actual-minutes input: negative / garbage values must pass null.
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
    nearestExamDays: computed(() => null),
    nearestUpcomingExam: computed(() => null),
    activeTasks: computed(() => tasks().filter(t => !t.completed)),
    devouredTasks: computed(() => tasks().filter(t => t.completed)),
    xpProgress: computed(() => ({ current: 0, next: 50, percent: 0 })),
    addTask: vi.fn(),
    updateTask: vi.fn(),
    completeTaskWithTime: vi.fn(),
    deleteTask: vi.fn(),
    addExam: vi.fn(),
    updateExam: vi.fn(),
    removeExam: vi.fn(),
  };
}

type MockStore = ReturnType<typeof createMockStore>;

function setInput(el: HTMLInputElement, value: string): void {
  el.value = value;
  el.dispatchEvent(new Event('input'));
  el.dispatchEvent(new Event('change'));
}

function makeTask(title: string): StudyTask {
  return {
    id: 'task-1',
    title,
    weight: 'MEAL',
    completed: false,
    createdAt: Date.now(),
  };
}

describe('isValidIsoDate (date-format boundary)', () => {
  it('accepts well-formed dates including leap day', () => {
    expect(isValidIsoDate('2026-05-10')).toBe(true);
    expect(isValidIsoDate('2024-02-29')).toBe(true);
    expect(isValidIsoDate('2020-01-15')).toBe(true);
  });

  it('rejects malformed strings, impossible months/days and empty input', () => {
    expect(isValidIsoDate('2026-02-30')).toBe(false);
    expect(isValidIsoDate('2026-13-45')).toBe(false);
    expect(isValidIsoDate('2026-13-01')).toBe(false);
    expect(isValidIsoDate('2026-00-10')).toBe(false);
    expect(isValidIsoDate('2026/02/10')).toBe(false);
    expect(isValidIsoDate('not-a-date')).toBe(false);
    expect(isValidIsoDate('2026-5-10')).toBe(false);
    expect(isValidIsoDate('')).toBe(false);
  });
});

describe('Invalid & edge-case input guards (DOM-level)', () => {
  let mockStore: MockStore;

  beforeEach(() => {
    mockStore = createMockStore();
    TestBed.configureTestingModule({
      imports: [App],
      providers: [{ provide: MonsterStoreService, useValue: mockStore }],
    });
  });

  // ── Exam date ──────────────────────────────────────────────────────

  it('rejects an exam submission with an empty date', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    setInput(
      compiled.querySelector<HTMLInputElement>('[data-testid="exam-input-subject"]')!,
      'MATH'
    );
    // No date set at all.
    compiled.querySelector<HTMLButtonElement>('[data-testid="exam-add-btn"]')!.click();

    expect(mockStore.addExam).not.toHaveBeenCalled();
  });

  it('rejects a malformed exam date string', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    setInput(
      compiled.querySelector<HTMLInputElement>('[data-testid="exam-input-date"]')!,
      'not-a-date'
    );
    compiled.querySelector<HTMLButtonElement>('[data-testid="exam-add-btn"]')!.click();

    // Whatever the DOM sanitizes it to, a non-ISO garbage string must never
    // be handed to the engine (which stores dateIso verbatim).
    expect(mockStore.addExam).not.toHaveBeenCalled();
  });

  it('rejects an impossible calendar date (month 13, day 45)', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    setInput(
      compiled.querySelector<HTMLInputElement>('[data-testid="exam-input-date"]')!,
      '2026-13-45'
    );
    compiled.querySelector<HTMLButtonElement>('[data-testid="exam-add-btn"]')!.click();

    expect(mockStore.addExam).not.toHaveBeenCalled();
  });

  it('rejects an impossible calendar date (Feb 30) and wrong separators', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    const dateInput = compiled.querySelector<HTMLInputElement>('[data-testid="exam-input-date"]')!;
    const addBtn = compiled.querySelector<HTMLButtonElement>('[data-testid="exam-add-btn"]')!;

    setInput(dateInput, '2026-02-30');
    addBtn.click();
    expect(mockStore.addExam).not.toHaveBeenCalled();

    setInput(dateInput, '2026/02/10');
    addBtn.click();
    expect(mockStore.addExam).not.toHaveBeenCalled();
  });

  it('still accepts a well-formed exam date (past dates are allowed by design)', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    setInput(
      compiled.querySelector<HTMLInputElement>('[data-testid="exam-input-subject"]')!,
      'HISTORY'
    );
    setInput(
      compiled.querySelector<HTMLInputElement>('[data-testid="exam-input-date"]')!,
      '2020-01-15'
    );
    compiled.querySelector<HTMLButtonElement>('[data-testid="exam-add-btn"]')!.click();

    expect(mockStore.addExam).toHaveBeenCalledWith('HISTORY', '2020-01-15', 'DEADLINE');
  });

  it('rejects an empty / whitespace exam name and flags it inline', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    // blank name + well-formed date → rejected
    setInput(
      compiled.querySelector<HTMLInputElement>('[data-testid="exam-input-date"]')!,
      '2026-05-10'
    );
    compiled.querySelector<HTMLButtonElement>('[data-testid="exam-add-btn"]')!.click();
    fixture.detectChanges();
    expect(mockStore.addExam).not.toHaveBeenCalled();
    expect(compiled.querySelector('[data-testid="exam-form-error"]')?.textContent)
      .toContain('name');

    // whitespace-only name → also rejected
    setInput(
      compiled.querySelector<HTMLInputElement>('[data-testid="exam-input-subject"]')!,
      '   '
    );
    compiled.querySelector<HTMLButtonElement>('[data-testid="exam-add-btn"]')!.click();
    expect(mockStore.addExam).not.toHaveBeenCalled();

    // naming the item clears the inline flag
    setInput(
      compiled.querySelector<HTMLInputElement>('[data-testid="exam-input-subject"]')!,
      'MATH'
    );
    fixture.detectChanges();
    expect(compiled.querySelector('[data-testid="exam-form-error"]')).toBeNull();
  });

  it('rejects blanking the name in the exam edit form', () => {
    mockStore.exams.set([{ id: 'exam-1', subjectTag: 'BIO', dateIso: '2026-12-11', kind: 'DEADLINE' }]);
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    compiled.querySelector<HTMLButtonElement>('[data-testid="exam-chip-edit"]')!.click();
    fixture.detectChanges();

    setInput(
      compiled.querySelector<HTMLInputElement>('[data-testid="exam-edit-subject"]')!,
      ''
    );
    compiled.querySelector<HTMLButtonElement>('[data-testid="exam-edit-save"]')!.click();
    fixture.detectChanges();
    expect(mockStore.updateExam).not.toHaveBeenCalled();
    expect(compiled.querySelector('[data-testid="exam-edit-error"]')?.textContent)
      .toContain('empty');
  });

  // ── Task estimate ──────────────────────────────────────────────────

  it('rejects an empty / whitespace title', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    setInput(
      compiled.querySelector<HTMLInputElement>('[data-testid="task-title-input"]')!,
      '   '
    );
    compiled.querySelector<HTMLButtonElement>('[data-testid="task-submit-btn"]')!.click();
    fixture.detectChanges();

    expect(mockStore.addTask).not.toHaveBeenCalled();
    // the blank task name is flagged inline instead of being swallowed silently
    expect(compiled.querySelector('[data-testid="task-form-error"]')?.textContent)
      .toContain('Name');
  });

  it('rejects a negative estimated-minutes value', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    setInput(
      compiled.querySelector<HTMLInputElement>('[data-testid="task-title-input"]')!,
      'Read chapter'
    );
    setInput(
      compiled.querySelector<HTMLInputElement>('[data-testid="task-estimate-minutes"]')!,
      '-5'
    );
    compiled.querySelector<HTMLButtonElement>('[data-testid="task-submit-btn"]')!.click();

    expect(mockStore.addTask).toHaveBeenCalledWith('Read chapter', 'SNACK', undefined, undefined);
  });

  it('rejects zero and non-numeric estimated-minutes values', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    const title = compiled.querySelector<HTMLInputElement>('[data-testid="task-title-input"]')!;
    const estimate = compiled.querySelector<HTMLInputElement>('[data-testid="task-estimate-minutes"]')!;
    const submit = compiled.querySelector<HTMLButtonElement>('[data-testid="task-submit-btn"]')!;

    setInput(title, 'Read chapter');
    setInput(estimate, '0');
    submit.click();
    setInput(title, 'Read chapter');
    setInput(estimate, 'abc');
    submit.click();

    for (const call of mockStore.addTask.mock.calls) {
      expect(call[3]).toBeUndefined();
    }
    expect(mockStore.addTask).toHaveBeenCalledTimes(2);
  });

  it('accepts fractional minutes as a valid positive duration', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    setInput(
      compiled.querySelector<HTMLInputElement>('[data-testid="task-title-input"]')!,
      'Flashcards'
    );
    setInput(
      compiled.querySelector<HTMLInputElement>('[data-testid="task-estimate-minutes"]')!,
      '2.5'
    );
    compiled.querySelector<HTMLButtonElement>('[data-testid="task-submit-btn"]')!.click();

    expect(mockStore.addTask).toHaveBeenCalledWith('Flashcards', 'SNACK', undefined, 2.5);
  });

  // ── Actual minutes ─────────────────────────────────────────────────

  it('rejects negative / garbage actual-minutes values (passes null, not the value)', () => {
    mockStore.tasks.set([makeTask('Problem set')]);
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    const actual = compiled.querySelector<HTMLInputElement>('[data-testid="task-actual-minutes"]')!;
    const checkbox = compiled.querySelector<HTMLInputElement>('input[type="checkbox"]')!;

    setInput(actual, '-3');
    checkbox.click();
    expect(mockStore.completeTaskWithTime.mock.calls[0][1]).toBeNull();
  });

  // ── Edit forms: same guards apply ──────────────────────────────────

  it('exam edit form never hands a malformed date to updateExam', () => {
    mockStore.exams.set([{ id: 'exam-1', subjectTag: 'BIO', dateIso: '2026-12-11', kind: 'DEADLINE' }]);
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    compiled.querySelector<HTMLButtonElement>('[data-testid="exam-chip-edit"]')!.click();
    fixture.detectChanges();

    setInput(
      compiled.querySelector<HTMLInputElement>('[data-testid="exam-edit-date"]')!,
      '2026-02-30' // impossible calendar date
    );
    compiled.querySelector<HTMLButtonElement>('[data-testid="exam-edit-save"]')!.click();

    expect(mockStore.updateExam).not.toHaveBeenCalled();
  });

  it('task edit form never hands garbage or non-positive estimates to updateTask', () => {
    mockStore.tasks.set([makeTask('Problem set')]);
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    compiled.querySelector<HTMLButtonElement>('[data-testid="task-edit-btn"]')!.click();
    fixture.detectChanges();

    setInput(
      compiled.querySelector<HTMLInputElement>('[data-testid="task-edit-title"]')!,
      'Edited title'
    );
    setInput(
      compiled.querySelector<HTMLInputElement>('[data-testid="task-edit-estimate"]')!,
      'abc'
    );
    compiled.querySelector<HTMLButtonElement>('[data-testid="task-edit-save"]')!.click();

    expect(mockStore.updateTask).toHaveBeenCalledTimes(1);
    // Garbage estimate must pass null (cleared), never the raw string
    expect(mockStore.updateTask.mock.calls[0][4]).toBeNull();
  });

  it('formats digits as you type into strict YYYY-MM-DD', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    const subjectInput = compiled.querySelector<HTMLInputElement>('[data-testid="exam-input-subject"]')!;
    const dateInput = compiled.querySelector<HTMLInputElement>('[data-testid="exam-input-date"]')!;
    const addBtn = compiled.querySelector<HTMLButtonElement>('[data-testid="exam-add-btn"]')!;
    const placeholderFormats = compiled.querySelectorAll<HTMLInputElement>(
      '[data-testid="exam-input-date"][placeholder="YYYY-MM-DD"]'
    );
    expect(placeholderFormats.length).toBeGreaterThan(0); // expected shape always visible

    subjectInput!.value = 'MATH';
    subjectInput!.dispatchEvent(new Event('input'));

    // Mid-typing: digits only — dashes are inserted automatically
    dateInput!.value = '2026112';
    dateInput!.dispatchEvent(new Event('input'));
    expect(dateInput!.value).toBe('2026-11-2');

    // A complete date passes straight through the mask to the engine
    dateInput!.value = '20261128';
    dateInput!.dispatchEvent(new Event('input'));
    expect(dateInput!.value).toBe('2026-11-28');

    addBtn!.click();
    expect(mockStore.addExam).toHaveBeenCalledWith('MATH', '2026-11-28', 'DEADLINE');
  });

  it('offers a native date-picker companion on the masked inputs', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    // one picker button + hidden picker <input type="date"> per date field
    const pickerButtons = compiled.querySelectorAll('[data-testid="exam-date-picker-btn"]');
    const hiddenPickers = compiled.querySelectorAll<HTMLInputElement>('input.date-picker-hidden');
    expect(pickerButtons.length).toBe(1);
    expect(hiddenPickers.length).toBe(1);

    // picked dates land in the add form
    const dateInput = compiled.querySelector<HTMLInputElement>('[data-testid="exam-input-date"]')!;
    const hiddenPicker = hiddenPickers[0]!;
    hiddenPicker.value = '2026-12-05';
    hiddenPicker.dispatchEvent(new Event('change'));
    expect(dateInput.value).toBe('2026-12-05');
  });

  // ── Chip pill date formatting ──────────────────────────────────────

  it('reformats stored ISO chip dates as DD Mon YYYY', () => {
    expect(formatExamDateDisplay('2026-11-30')).toBe('30 Nov 2026');
    expect(formatExamDateDisplay('2027-01-07')).toBe('07 Jan 2027');
    expect(formatExamDateDisplay('1999-12-31')).toBe('31 Dec 1999');
  });

  it('falls back to the raw string for unparsable chip dates', () => {
    expect(formatExamDateDisplay('2026/02/10')).toBe('2026/02/10');
    expect(formatExamDateDisplay('2026-13-01')).toBe('2026-13-01');
    expect(formatExamDateDisplay('')).toBe('');
  });

  it('renders the formatted date on deadline/exam chips', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    mockStore.exams.set([{ id: 'exam-1', subjectTag: 'BIO', dateIso: '2026-12-11', kind: 'DEADLINE' }]);
    fixture.detectChanges();

    const chipDate = compiled.querySelector('[data-testid="exam-chip"] .exam-chip-date');
    expect(chipDate?.textContent?.trim()).toBe('11 Dec 2026');
  });
});
