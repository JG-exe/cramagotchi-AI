import { TestBed } from '@angular/core/testing';
import { beforeEach, describe, it, expect } from 'vitest';
import { App } from './app';
import { MonsterStoreService } from './services/monster-store.service';
import { com } from '../assets/kmp/cramagotchi-shared-logic.js';

/**
 * Smoke test: the full user journey driven through the real DOM against the
 * REAL KMP engine (no store mock) — the only spec that exercises the
 * component ↔ shared-logic ↔ localStorage integration end to end.
 *
 * Covers the exact paths touched by the recent frontend alignment:
 *   1. App boots and renders both major panels.
 *   2. Task lifecycle: inactive add button → active via typing → submit →
 *      task in active list → circular feed button completes it → devoured
 *      list shows it → devoured delete removes it (also from storage).
 *   3. Exam lifecycle: name + valid ISO date activate the add button →
 *      add reaches the engine and renders as a chip.
 *   4. Two-week retention: devoured tasks past 14 days are purged from
 *      state AND storage at boot (via the normal engine delete), and the
 *      explicit purge call reports what it removed without touching XP.
 *
 * Not covered (by design — jsdom): CSS animations, layout, desktop/Android
 * WebView. Use Playwright E2E for that layer.
 */

const Storage = com.cramagotchi.storage.StorageRepository;

function setInput(el: HTMLInputElement, value: string): void {
  el.value = value;
  el.dispatchEvent(new Event('input'));
  el.dispatchEvent(new Event('change'));
}

describe('App smoke — real engine, full user journey', () => {
  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({ imports: [App] });
  });

  it('boots and renders the study queue and exam portfolio panels', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('[data-testid="task-form"]')).toBeTruthy();
    expect(compiled.querySelector('[data-testid="task-title-input"]')).toBeTruthy();
    expect(compiled.querySelector('[data-testid="exam-form"]')).toBeTruthy();
    expect(compiled.querySelector('[data-testid="exam-input-date"]')).toBeTruthy();
    // Fresh engine state: empty queue shows the calm empty state
    expect(compiled.querySelector('.empty-state')?.textContent).toContain('devoured');
  });

  it('task lifecycle: add → complete via feed button → devoured → delete', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const store = TestBed.inject(MonsterStoreService);

    // 1. Empty title → add button inactive (dimmed, clickable)
    const addBtn = compiled.querySelector<HTMLButtonElement>('[data-testid="task-submit-btn"]')!;
    expect(addBtn.classList).toContain('btn-submit-inactive');
    expect(addBtn.disabled).toBe(false);

    // 2. Typing activates it
    setInput(compiled.querySelector<HTMLInputElement>('[data-testid="task-title-input"]')!, 'Smoke chapter 4');
    fixture.detectChanges();
    expect(addBtn.classList).not.toContain('btn-submit-inactive');

    // 3. Submit → reaches the real engine, renders, and persists
    addBtn.click();
    fixture.detectChanges();
    expect(store.activeTasks().length).toBe(1);
    expect(store.activeTasks()[0].title).toBe('Smoke chapter 4');
    expect(compiled.querySelector('.empty-state')).toBeNull();
    expect(localStorage.getItem(Storage.STORAGE_KEY)!).toContain('Smoke chapter 4');

    // 4. Circular feed button (not a Material checkbox) completes the task
    const completeBtn = compiled.querySelector<HTMLButtonElement>('[data-testid="task-complete-btn"]')!;
    completeBtn.click();
    fixture.detectChanges();
    expect(store.activeTasks().length).toBe(0);
    expect(store.devouredTasks().length).toBe(1);
    // XP was actually granted by the engine (SNACK baseline ≈10)
    expect(store.monster().xp).toBeGreaterThan(0);

    // 5. Devoured section renders; open the accordion to see the new item
    compiled.querySelector<HTMLButtonElement>('.btn-toggle-devoured')!.click();
    fixture.detectChanges();
    const devouredItem = compiled.querySelector('.devoured-item')!;
    expect(devouredItem.textContent).toContain('Smoke chapter 4');

    // 6. Devoured delete control removes it from state AND storage —
    //    proves Engine.deleteTask works on completed tasks.
    const devouredDelete = compiled.querySelector<HTMLButtonElement>('[data-testid="devoured-task-delete"]')!;
    devouredDelete.click();
    fixture.detectChanges();

    expect(store.devouredTasks().length).toBe(0);
    expect(localStorage.getItem(Storage.STORAGE_KEY)!).not.toContain('Smoke chapter 4');
  });

  it('exam lifecycle: inactive until name + valid date, then add reaches the engine', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const store = TestBed.inject(MonsterStoreService);

    const addBtn = compiled.querySelector<HTMLButtonElement>('[data-testid="exam-add-btn"]')!;
    expect(addBtn.classList).toContain('btn-submit-inactive');

    // Name alone is not enough
    setInput(compiled.querySelector<HTMLInputElement>('[data-testid="exam-input-subject"]')!, 'SMOKE');
    fixture.detectChanges();
    expect(addBtn.classList).toContain('btn-submit-inactive');

    // A real calendar date activates the button
    setInput(compiled.querySelector<HTMLInputElement>('[data-testid="exam-input-date"]')!, '2099-01-15');
    fixture.detectChanges();
    expect(addBtn.classList).not.toContain('btn-submit-inactive');

    addBtn.click();
    fixture.detectChanges();
    expect(store.exams().length).toBe(1);
    expect(store.exams()[0].subjectTag).toBe('SMOKE');
    expect(store.exams()[0].dateIso).toBe('2099-01-15');
    // Renders as a chip in the portfolio list
    expect(compiled.querySelector('[data-testid="exams-list"]')?.textContent).toContain('SMOKE');
  });

  it('two-week retention: expired devoured tasks are PURGED from state and storage', () => {
    // Seed a valid engine save with two devoured tasks: one ancient, one recent.
    // Payload shape mirrors monster-store-restore.spec.ts (string enum names).
    const now = Date.now();
    const WEEK = 7 * 24 * 60 * 60 * 1000;
    const DAY = 24 * 60 * 60 * 1000;

    localStorage.setItem(Storage.STORAGE_KEY, JSON.stringify({
      tasks: [
        {
          id: 'task-old', title: 'Ancient snack', weight: 'SNACK',
          completed: true, createdAt: now - 3 * WEEK, completedAt: now - 3 * WEEK, awardedXp: 10,
        },
        {
          id: 'task-new', title: 'Recent snack', weight: 'SNACK',
          completed: true, createdAt: now - 2 * DAY, completedAt: now - 2 * DAY, awardedXp: 10,
        },
      ],
      monster: { name: 'Munch', xp: 20, stage: 'EGG', status: 'IDLE', lastFedAt: now },
      exams: [],
    }));

    // Fresh fixture → restoreFromStorage picks up the doctored save, then the
    // constructor's boot purge sweeps the expired task out of storage.
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const store = TestBed.inject(MonsterStoreService);

    // Purged from the in-memory state — not just hidden from the UI
    expect(store.devouredTasks().map(t => t.title)).toEqual(['Recent snack']);

    // Purged from storage — the localStorage payload no longer holds it
    const persisted = localStorage.getItem(Storage.STORAGE_KEY)!;
    expect(persisted).not.toContain('Ancient snack');
    expect(persisted).toContain('Recent snack');

    // UI agrees: accordion counts only the surviving task
    expect(compiled.querySelector('.btn-toggle-devoured')?.textContent).toContain('Devoured Tasks (1)');
    compiled.querySelector<HTMLButtonElement>('.btn-toggle-devoured')!.click();
    fixture.detectChanges();
    const titles = Array.from(compiled.querySelectorAll('.devoured-title'))
      .map(e => e.textContent?.trim());
    expect(titles).toEqual(['Recent snack']); // ancient task gone entirely
  });

  it('purgeExpiredDevouredTasks deletes every expired task via the normal delete, keeps XP', () => {
    const now = Date.now();
    const DAY = 24 * 60 * 60 * 1000;

    // One active task, one fresh devoured, TWO devoured at 8 days — inside
    // the retention window at boot, but past it one week later. Seeding
    // mid-window keeps the boot purge from firing so the explicit call's
    // return value (and batch loop) is what gets tested.
    localStorage.setItem(Storage.STORAGE_KEY, JSON.stringify({
      tasks: [
        {
          id: 'task-active', title: 'Fresh active', weight: 'MEAL',
          completed: false, createdAt: now - DAY, completedAt: null,
        },
        {
          id: 'task-new', title: 'Recent snack', weight: 'SNACK',
          completed: true, createdAt: now - DAY, completedAt: now - DAY, awardedXp: 10,
        },
        {
          id: 'task-old-1', title: 'Mid-aged snack one', weight: 'SNACK',
          completed: true, createdAt: now - 8 * DAY, completedAt: now - 8 * DAY, awardedXp: 10,
        },
        {
          id: 'task-old-2', title: 'Mid-aged snack two', weight: 'MEAL',
          completed: true, createdAt: now - 8 * DAY, completedAt: now - 8 * DAY, awardedXp: 25,
        },
      ],
      monster: { name: 'Munch', xp: 45, stage: 'EGG', status: 'IDLE', lastFedAt: now },
      exams: [],
    }));

    const store = TestBed.inject(MonsterStoreService);

    // Purge one week into the future: exactly the two 8-day-old devoured
    // tasks have crossed the 14-day retention; the rest is untouched.
    const purged = store.purgeExpiredDevouredTasks(now + 7 * DAY);
    expect(purged).toBe(2);

    // Active and fresh devoured tasks survive
    expect(store.activeTasks().map(t => t.title)).toEqual(['Fresh active']);
    expect(store.devouredTasks().map(t => t.title)).toEqual(['Recent snack']);
    expect(store.tasks().length).toBe(2);

    // Granted XP was NOT clawed back by the deletes
    expect(store.monster().xp).toBe(45);

    // Storage reflects the purge
    const persisted = localStorage.getItem(Storage.STORAGE_KEY)!;
    expect(persisted).not.toContain('Mid-aged snack one');
    expect(persisted).not.toContain('Mid-aged snack two');
    expect(persisted).toContain('Fresh active');
    expect(persisted).toContain('Recent snack');

    // Running purge again (same future now, or now) is a clean no-op
    expect(store.purgeExpiredDevouredTasks(now + 7 * DAY)).toBe(0);
    expect(store.purgeExpiredDevouredTasks()).toBe(0);
  });
});
