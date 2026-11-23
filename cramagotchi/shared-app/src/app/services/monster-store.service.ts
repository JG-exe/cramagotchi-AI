import { Injectable, signal, computed } from '@angular/core';
import { com } from '../../assets/kmp/cramagotchi-shared-logic.js';

const Engine = com.cramagotchi.engine.CramagotchiEngine;
const Model = com.cramagotchi.model;
const Storage = com.cramagotchi.storage.StorageRepository;

/** KMP-side types (structurally compatible with the public TS unions below). */
type KmpAppState = import('../../assets/kmp/cramagotchi-shared-logic.js').com.cramagotchi.model.AppState;

export type TaskWeight = 'SNACK' | 'MEAL';
export type MonsterStatus = 'IDLE' | 'HUNGRY' | 'EATING' | 'SLEEPING';
export type EvolutionStage = 'EGG' | 'HATCHLING' | 'SCHOLAR' | 'GRADUATED_BEAST';

export interface StudyTask {
  id: string;
  title: string;
  subjectTag?: string;
  weight: TaskWeight;
  completed: boolean;
  createdAt: number;
  completedAt?: number;
}

export interface MonsterState {
  name: string;
  xp: number;
  stage: EvolutionStage;
  status: MonsterStatus;
  lastFedAt: number;
  eatingUntil?: number;
  sleepUntil?: number;
}

export interface AppState {
  tasks: StudyTask[];
  monster: MonsterState;
  examDateIso?: string;
}

/**
 * Thin UI store: all state transitions and business rules are delegated to
 * the compiled KMP engine (`shared-logic`). This service only owns Angular
 * Signals wiring and localStorage persistence through StorageRepository.
 */
@Injectable({ providedIn: 'root' })
export class MonsterStoreService {
  /** KMP state — single source of truth. */
  private readonly kmpState = signal<KmpAppState>(
    Engine.createInitialState('Munch', Date.now())
  );

  readonly monster = computed<MonsterState>(() =>
    toMonsterState(this.kmpState().monster)
  );

  readonly tasks = computed<StudyTask[]>(() =>
    this.kmpState().tasks.map(toStudyTask)
  );

  readonly examDateIso = signal<string | null>(null);

  /** Ticks once per interval pass so date-derived computeds (like the
   *  exam countdown) refresh when the calendar day changes. */
  readonly dayTick = signal(0);

  /** Days remaining until exam (if set) */
  readonly examCountdownDays = computed(() => {
    this.dayTick(); // re-evaluate when the interval ticks
    const iso = this.examDateIso();
    if (!iso) return null;
    const target = new Date(iso).setHours(0, 0, 0, 0);
    const today = new Date().setHours(0, 0, 0, 0);
    const diff = target - today;
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
  });

  /** Active (uncompleted) tasks */
  readonly activeTasks = computed(() => this.tasks().filter(t => !t.completed));

  /** Devoured (completed) tasks */
  readonly devouredTasks = computed(() => this.tasks().filter(t => t.completed));

  /** Computed XP progress toward next evolution */
  readonly xpProgress = computed(() => {
    const xp = this.monster().xp;
    if (xp < 50) return { current: xp, next: 50, percent: Math.min(100, (xp / 50) * 100) };
    if (xp < 150) return { current: xp, next: 150, percent: Math.min(100, ((xp - 50) / 100) * 100) };
    if (xp < 300) return { current: xp, next: 300, percent: Math.min(100, ((xp - 150) / 150) * 100) };
    return { current: xp, next: 300, percent: 100 };
  });

  constructor() {
    this.restoreFromStorage();

    // Evaluate time every second for active timers
    if (typeof window !== 'undefined') {
      window.setInterval(() => {
        this.evaluateTime(Date.now());
        this.dayTick.update(t => t + 1);
      }, 1000);
    }
  }

  setExamDate(isoString: string | null): void {
    this.examDateIso.set(isoString);
    const s = this.kmpState();
    this.kmpState.set(new Model.AppState(s.tasks, s.monster, isoString ?? undefined));
    this.persistToStorage();
  }

  addTask(title: string, weight: TaskWeight, subjectTag?: string): void {
    const trimmed = title.trim();
    if (!trimmed) return;

    const kmpWeight = weight === 'SNACK' ? Model.TaskWeight.SNACK : Model.TaskWeight.MEAL;
    this.kmpState.set(
      Engine.addTask(this.kmpState(), trimmed, kmpWeight, Date.now(), subjectTag?.trim() || null)
    );
    this.persistToStorage();
  }

  completeTask(taskId: string): void {
    this.kmpState.set(Engine.completeTask(this.kmpState(), taskId, Date.now()));
    this.persistToStorage();
  }

  deleteTask(taskId: string): void {
    this.kmpState.set(Engine.deleteTask(this.kmpState(), taskId));
    this.persistToStorage();
  }

  evaluateTime(now: number): void {
    const before = this.kmpState();
    const after = Engine.evaluateTime(before, now);
    const beforeMonster = before.monster;
    const afterMonster = after.monster;

    const changed =
      beforeMonster.status !== afterMonster.status ||
      beforeMonster.eatingUntil !== afterMonster.eatingUntil ||
      beforeMonster.sleepUntil !== afterMonster.sleepUntil;

    if (changed) {
      this.kmpState.set(after);
      this.persistToStorage();
    }
  }

  private persistToStorage(): void {
    if (typeof localStorage === 'undefined') return;
    try {
      localStorage.setItem(Storage.STORAGE_KEY, Storage.serialize(this.kmpState()));
    } catch {
      // Ignore localStorage errors (e.g., storage quota or security)
    }
  }

  private restoreFromStorage(): void {
    if (typeof localStorage === 'undefined') return;
    try {
      const raw = localStorage.getItem(Storage.STORAGE_KEY);
      if (!raw) return;
      const restored = Storage.deserialize(raw);
      if (restored) {
        this.kmpState.set(restored);
        if (restored.examDateIso) {
          this.examDateIso.set(restored.examDateIso);
        }
        // Immediately evaluate offline elapsed time
        this.evaluateTime(Date.now());
      }
    } catch {
      // Keep defaults on parse failure
    }
  }
}

/** Map the KMP enums (objects) to the public string unions. */
function toMonsterState(m: KmpAppState['monster']): MonsterState {
  return {
    name: m.name,
    xp: m.xp,
    stage: m.stage.name as EvolutionStage,
    status: m.status.name as MonsterStatus,
    lastFedAt: m.lastFedAt,
    eatingUntil: m.eatingUntil ?? undefined,
    sleepUntil: m.sleepUntil ?? undefined,
  };
}

function toStudyTask(t: KmpAppState['tasks'][number]): StudyTask {
  return {
    id: t.id,
    title: t.title,
    subjectTag: t.subjectTag ?? undefined,
    weight: t.weight.name as TaskWeight,
    completed: t.completed,
    createdAt: t.createdAt,
    completedAt: t.completedAt ?? undefined,
  };
}
