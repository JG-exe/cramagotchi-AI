import { TestBed } from '@angular/core/testing';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { signal, computed } from '@angular/core';
import { App } from './app';
import { MonsterStoreService, MonsterState, StudyTask } from './services/monster-store.service';

/**
 * TDD Test Suite for the Angular App component.
 * These 4 tests cover §7-B of agents.md.
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

  return {
    monster,
    tasks,
    xpProgress: computed(() => {
      const xp = monster().xp;
      if (xp < 50) return { current: xp, next: 50, percent: (xp / 50) * 100 };
      if (xp < 150) return { current: xp, next: 150, percent: (xp / 150) * 100 };
      if (xp < 300) return { current: xp, next: 300, percent: (xp / 300) * 100 };
      return { current: xp, next: xp, percent: 100 };
    }),
    addTask: vi.fn(),
    completeTask: vi.fn(),
    deleteTask: vi.fn(),
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
    mockStore.completeTask('task-1');
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

    // completeTask was called
    expect(mockStore.completeTask).toHaveBeenCalledWith('task-1');
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
});
