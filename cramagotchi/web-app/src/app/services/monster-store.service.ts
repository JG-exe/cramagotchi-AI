import { Injectable, signal, computed } from '@angular/core';

/**
 * MonsterStoreService — wraps the KMP engine module with Angular Signals.
 *
 * STUB: All methods are placeholders. Implementation after test review.
 * During Phase 1 (tests), we mock this service in specs.
 */

export interface StudyTask {
  id: string;
  title: string;
  subjectTag?: string;
  weight: 'SNACK' | 'MEAL';
  completed: boolean;
  createdAt: number;
  completedAt?: number;
}

export interface MonsterState {
  name: string;
  xp: number;
  stage: 'EGG' | 'HATCHLING' | 'SCHOLAR' | 'GRADUATED_BEAST';
  status: 'IDLE' | 'HUNGRY' | 'EATING' | 'SLEEPING';
  lastFedAt: number;
  eatingUntil?: number;
  sleepUntil?: number;
}

@Injectable({ providedIn: 'root' })
export class MonsterStoreService {
  /** Reactive monster state signal */
  readonly monster = signal<MonsterState>({
    name: 'Munch',
    xp: 0,
    stage: 'EGG',
    status: 'IDLE',
    lastFedAt: Date.now(),
  });

  /** Reactive task list signal */
  readonly tasks = signal<StudyTask[]>([]);

  /** Computed XP progress toward next evolution */
  readonly xpProgress = computed(() => {
    const xp = this.monster().xp;
    if (xp < 50) return { current: xp, next: 50, percent: (xp / 50) * 100 };
    if (xp < 150) return { current: xp, next: 150, percent: (xp / 150) * 100 };
    if (xp < 300) return { current: xp, next: 300, percent: (xp / 300) * 100 };
    return { current: xp, next: xp, percent: 100 };
  });

  /** Add a new task */
  addTask(title: string, weight: 'SNACK' | 'MEAL', subjectTag?: string): void {
    // TODO: delegate to KMP engine
  }

  /** Complete a task by ID */
  completeTask(taskId: string): void {
    // TODO: delegate to KMP engine
  }

  /** Delete a task by ID */
  deleteTask(taskId: string): void {
    // TODO: delegate to KMP engine
  }
}
