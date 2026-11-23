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
  /** Optional user estimate (minutes) for the estimation-accuracy bonus. */
  estimatedMinutes?: number | null;
  /** Actual XP awarded — only set when the task completes (hidden before). */
  awardedXp?: number | null;
}

/** One upcoming exam, as exposed to the UI. */
export interface ExamRef {
  id: string;
  subjectTag?: string | null;
  dateIso: string;
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
  exams?: ExamRef[];
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

  /** Ticks once per interval pass so date-derived computeds refresh when
   *  the calendar day changes. */
  readonly dayTick = signal(0);

  /** Exam portfolio — every exam the user tracks. */
  readonly exams = computed<ExamRef[]>(() =>
    this.kmpState().exams.asJsReadonlyArrayView().map(toExamRef)
  );

  /** Days until the nearest upcoming exam across the portfolio. */
  readonly nearestExamDays = computed<number | null>(() => {
    this.dayTick(); // re-evaluate when the interval ticks
    return Engine.nearestExamDays(this.kmpState(), Date.now()) ?? null;
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

  addTask(
    title: string,
    weight: TaskWeight,
    subjectTag?: string,
    estimatedMinutes?: number | null
  ): void {
    const trimmed = title.trim();
    if (!trimmed) return;

    const kmpWeight = weight === 'SNACK' ? Model.TaskWeight.SNACK : Model.TaskWeight.MEAL;
    this.kmpState.set(
      Engine.addTask(
        this.kmpState(),
        trimmed,
        kmpWeight,
        Date.now(),
        subjectTag?.trim() || null,
        estimatedMinutes ?? null
      )
    );
    this.persistToStorage();
  }

  completeTask(taskId: string): void {
    this.completeTaskWithTime(taskId, null);
  }

  /**
   * Complete a task, optionally recording how long it actually took so the
   * engine can grant the estimation-accuracy bonus. The awarded XP is
   * slightly variable and stays hidden inside the engine until completion.
   */
  completeTaskWithTime(taskId: string, actualMinutes: number | null): void {
    this.kmpState.set(
      Engine.completeTask(this.kmpState(), taskId, Date.now(), actualMinutes, Math.random())
    );
    this.persistToStorage();
  }

  /** Add an exam (subject label optional) to the exam portfolio. */
  addExam(subjectTag: string | null, dateIso: string): void {
    this.kmpState.set(Engine.addExam(this.kmpState(), subjectTag, dateIso, Date.now()));
    this.persistToStorage();
  }

  /** Remove an exam from the portfolio by id. */
  removeExam(examId: string): void {
    this.kmpState.set(Engine.removeExam(this.kmpState(), examId));
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
    estimatedMinutes: t.estimatedMinutes ?? undefined,
    awardedXp: t.awardedXp ?? undefined,
  };
}

type KmpExam = {
  id: string;
  subjectTag?: string | null;
  dateIso: string;
};

function toExamRef(e: KmpExam): ExamRef {
  return {
    id: e.id,
    subjectTag: e.subjectTag ?? undefined,
    dateIso: e.dateIso,
  };
}
