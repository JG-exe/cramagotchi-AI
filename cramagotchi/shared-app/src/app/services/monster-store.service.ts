import { Injectable, signal, computed } from '@angular/core';
import { com } from '../../assets/kmp/cramagotchi-shared-logic.js';

const Engine = com.cramagotchi.engine.CramagotchiEngine;
const Model = com.cramagotchi.model;
const Storage = com.cramagotchi.storage.StorageRepository;

/** How long a devoured task is kept before it is purged from storage. */
export const DEVOURED_RETENTION_MS = 14 * 24 * 60 * 60 * 1000; // two weeks

/** KMP-side types (structurally compatible with the public TS unions below). */
type KmpAppState = import('../../assets/kmp/cramagotchi-shared-logic.js').com.cramagotchi.model.AppState;

export type TaskWeight = 'SNACK' | 'MEAL';
export type MonsterStatus = 'IDLE' | 'HUNGRY' | 'EATING' | 'SLEEPING';
export type EvolutionStage = 'EGG' | 'HATCHLING' | 'SCHOLAR' | 'GRADUATED_BEAST';
/** Every dated item is a DEADLINE by default; EXAM is the high-stakes upgrade. */
export type ExamKind = 'DEADLINE' | 'EXAM';

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

/** One upcoming exam or deadline, as exposed to the UI. */
export interface ExamRef {
  id: string;
  subjectTag?: string | null;
  dateIso: string;
  kind?: ExamKind;
}

export interface MonsterState {
  name: string;
  xp: number;
  stage: EvolutionStage;
  status: MonsterStatus;
  lastFedAt: number;
  eatingUntil?: number;
  sleepUntil?: number;
  /** The active creature's own tint (∈ 0..359); undefined on legacy saves until reconciled. */
  hue?: number;
}

/** One retired monster in the collected gallery (fully evolved only). */
export interface CollectedMonster {
  speciesId: string;
  /** The unique tint the creature wore through all its evolutions. */
  hue: number;
  collectedAt: number;
  /** Roaming pose frozen at retirement: true = sleeping, false = idling. */
  sleeping: boolean;
}

export interface AppState {
  tasks: StudyTask[];
  monster: MonsterState;
  exams?: ExamRef[];
  collection?: CollectedMonster[];
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
    Engine.createInitialState('Munch', Date.now(), Math.random())
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

  /** Nearest upcoming exam/deadline entry (exam day >= today), or null. */
  readonly nearestUpcomingExam = computed<ExamRef | null>(() => {
    this.dayTick();
    const nearest = Engine.nearestUpcomingExam(this.kmpState(), Date.now());
    return nearest ? toExamRef(nearest) : null;
  });

  /** Collected gallery — one entry per fully-raised (retired) monster. */
  readonly collection = computed<CollectedMonster[]>(() =>
    this.kmpState().collection.asJsReadonlyArrayView().map(toCollectedMonster)
  );

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

    // Two-week retention: sweep out expired devoured tasks on boot so a save
    // never carries more history than the window, then keep sweeping in the
    // background while the app runs (tasks crossing the cutoff mid-session).
    this.purgeExpiredDevouredTasks();

    // Evaluate time every second for active timers
    if (typeof window !== 'undefined') {
      window.setInterval(() => {
        this.evaluateTime(Date.now());
        this.purgeExpiredDevouredTasks();
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

  /**
   * Edit an uncompleted task: replaces title/weight/subject/estimate.
   * Delegates to the engine — completed tasks and unknown ids are no-ops.
   */
  updateTask(
    taskId: string,
    title: string,
    weight: TaskWeight,
    subjectTag?: string | null,
    estimatedMinutes?: number | null
  ): void {
    const trimmed = title.trim();
    if (!trimmed) return; // never push an empty title into the engine

    const kmpWeight = weight === 'SNACK' ? Model.TaskWeight.SNACK : Model.TaskWeight.MEAL;
    this.kmpState.set(
      Engine.updateTask(
        this.kmpState(),
        taskId,
        trimmed,
        kmpWeight,
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
      Engine.completeTask(this.kmpState(), taskId, Date.now(), actualMinutes, Math.random(), Math.random())
    );
    this.persistToStorage();
  }

  /**
   * The "I'm done with this" action for a deadline/exam: removes the entry
   * and feeds the monster, with bonus XP the earlier it is finished
   * (engine-side tiers; nothing on/after the due day beyond the base).
   */
  finishExam(examId: string): void {
    this.kmpState.set(
      Engine.finishExam(this.kmpState(), examId, Date.now(), Math.random())
    );
    this.persistToStorage();
  }

  /** Add an exam or deadline (subject label optional); deadline is the default kind. */
  addExam(subjectTag: string | null, dateIso: string, kind: ExamKind = 'DEADLINE'): void {
    const kmpKind = kind === 'EXAM' ? Model.ExamKind.EXAM : Model.ExamKind.DEADLINE;
    this.kmpState.set(Engine.addExam(this.kmpState(), subjectTag, dateIso, Date.now(), kmpKind));
    this.persistToStorage();
  }

  /** Edit an exam/deadline in place: subject, date and kind. */
  updateExam(examId: string, subjectTag: string | null, dateIso: string, kind: ExamKind = 'DEADLINE'): void {
    if (!dateIso) return;
    const kmpKind = kind === 'EXAM' ? Model.ExamKind.EXAM : Model.ExamKind.DEADLINE;
    this.kmpState.set(Engine.updateExam(this.kmpState(), examId, subjectTag, dateIso, kmpKind));
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

  /**
   * Two-week retention for devoured tasks: true once the task has aged out
   * of the retention window. Single source of truth shared by the UI filter
   * (don't show it) and the purge (delete it from storage).
   */
  isDevouredExpired(task: StudyTask, now = Date.now()): boolean {
    if (!task.completed) return false;
    const endedAt = task.completedAt ?? task.createdAt;
    return now - endedAt > DEVOURED_RETENTION_MS;
  }

  /**
   * Storage purge behind the two-week retention rule: calls the normal
   * delete (engine `deleteTask` + persist — the exact path the delete
   * button uses) on every devoured task past its retention. Granted XP is
   * never clawed back — it was earned when the task was completed.
   */
  purgeExpiredDevouredTasks(now = Date.now()): number {
    const expired = this.tasks().filter(t => this.isDevouredExpired(t, now));
    for (const task of expired) {
      this.deleteTask(task.id);
    }
    return expired.length;
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
      if (!raw) {
        // First run: persist immediately so the freshly rolled egg hue
        // and roster seed survive the next reload.
        this.persistToStorage();
        return;
      }
      const restored = Storage.deserialize(raw);
      if (restored) {
        // Legacy saves: backfill the roster (species at/below the monster's
        // stage) and the active monster's hue, then persist the backfill so
        // it sticks across reloads.
        this.kmpState.set(Engine.reconcileCollection(restored, Date.now(), Math.random()));
        this.persistToStorage();
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
    hue: m.hue ?? undefined,
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
  kind?: { name: string } | string;
};

function toExamRef(e: KmpExam): ExamRef {
  const kindName = typeof e.kind === 'string' ? e.kind : e.kind?.name;
  return {
    id: e.id,
    subjectTag: e.subjectTag ?? undefined,
    dateIso: e.dateIso,
    kind: (kindName === 'EXAM' ? 'EXAM' : 'DEADLINE') as ExamKind,
  };
}

type KmpCollectedMonster = {
  speciesId: string;
  hue: number;
  collectedAt: number;
  /** Roaming pose of the retired monster in the gallery (otherwise idling). */
  sleeping: boolean;
};

function toCollectedMonster(c: KmpCollectedMonster): CollectedMonster {
  return {
    speciesId: c.speciesId,
    hue: c.hue,
    collectedAt: c.collectedAt,
    sleeping: c.sleeping,
  };
}
