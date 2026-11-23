import { Injectable, signal, computed, effect } from '@angular/core';

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

const STORAGE_KEY = 'cramagotchi_app_state';

@Injectable({ providedIn: 'root' })
export class MonsterStoreService {
  private idCounter = Date.now();

  readonly monster = signal<MonsterState>({
    name: 'Munch',
    xp: 0,
    stage: 'EGG',
    status: 'IDLE',
    lastFedAt: Date.now(),
  });

  readonly tasks = signal<StudyTask[]>([]);
  readonly examDateIso = signal<string | null>(null);

  /** Active (uncompleted) tasks */
  readonly activeTasks = computed(() => this.tasks().filter(t => !t.completed));

  /** Devoured (completed) tasks */
  readonly devouredTasks = computed(() => this.tasks().filter(t => t.completed));

  /** Days remaining until exam (if set) */
  readonly examCountdownDays = computed(() => {
    const iso = this.examDateIso();
    if (!iso) return null;
    const target = new Date(iso).setHours(0, 0, 0, 0);
    const today = new Date().setHours(0, 0, 0, 0);
    const diff = target - today;
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
  });

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
      }, 1000);
    }
  }

  setExamDate(isoString: string | null): void {
    this.examDateIso.set(isoString);
    this.persistToStorage();
  }

  addTask(title: string, weight: TaskWeight, subjectTag?: string): void {
    const now = Date.now();
    const newTask: StudyTask = {
      id: `task-${++this.idCounter}`,
      title: title.trim(),
      weight,
      completed: false,
      createdAt: now,
      subjectTag: subjectTag?.trim() || undefined,
    };
    this.tasks.update(tasks => [...tasks, newTask]);
    this.persistToStorage();
  }

  completeTask(taskId: string): void {
    const now = Date.now();
    const currentTasks = this.tasks();
    const targetIndex = currentTasks.findIndex(t => t.id === taskId);
    if (targetIndex === -1 || currentTasks[targetIndex].completed) return;

    const task = currentTasks[targetIndex];
    const xpValue = task.weight === 'SNACK' ? 10 : 25;

    // Update tasks
    const updatedTasks = [...currentTasks];
    updatedTasks[targetIndex] = { ...task, completed: true, completedAt: now };
    this.tasks.set(updatedTasks);

    // Update monster state
    const currentMonster = this.monster();
    const newXp = currentMonster.xp + xpValue;
    const newStage = this.calculateEvolution(newXp);

    if (currentMonster.status === 'SLEEPING') {
      // Anti-distraction lock: keep sleeping, don't reset timer
      this.monster.set({
        ...currentMonster,
        xp: newXp,
        stage: newStage,
        lastFedAt: now,
      });
    } else {
      // Normal feeding: starts eat -> sleep cycle
      this.monster.set({
        ...currentMonster,
        xp: newXp,
        stage: newStage,
        status: 'EATING',
        lastFedAt: now,
        eatingUntil: now + 3_000,
        sleepUntil: now + 1_503_000,
      });
    }

    this.persistToStorage();
  }

  deleteTask(taskId: string): void {
    this.tasks.update(tasks => tasks.filter(t => t.id !== taskId || t.completed));
    this.persistToStorage();
  }

  evaluateTime(now: number): void {
    const m = this.monster();
    let newStatus = m.status;
    let newEatingUntil = m.eatingUntil;
    let newSleepUntil = m.sleepUntil;
    let changed = false;

    // Check EATING -> SLEEPING
    if (newStatus === 'EATING' && newEatingUntil && now > newEatingUntil) {
      newStatus = 'SLEEPING';
      newEatingUntil = undefined;
      changed = true;
    }

    // Check SLEEPING -> IDLE
    if (newStatus === 'SLEEPING' && newSleepUntil && now > newSleepUntil) {
      newStatus = 'IDLE';
      newSleepUntil = undefined;
      changed = true;
    }

    // Check 24h zero-punishment hunger (if IDLE)
    if (newStatus === 'IDLE' && now - m.lastFedAt > 86_400_000) {
      newStatus = 'HUNGRY';
      changed = true;
    }

    if (changed) {
      this.monster.set({
        ...m,
        status: newStatus,
        eatingUntil: newEatingUntil,
        sleepUntil: newSleepUntil,
      });
      this.persistToStorage();
    }
  }

  calculateEvolution(xp: number): EvolutionStage {
    if (xp >= 300) return 'GRADUATED_BEAST';
    if (xp >= 150) return 'SCHOLAR';
    if (xp >= 50) return 'HATCHLING';
    return 'EGG';
  }

  private persistToStorage(): void {
    if (typeof localStorage === 'undefined') return;
    try {
      const state: AppState = {
        tasks: this.tasks(),
        monster: this.monster(),
        examDateIso: this.examDateIso() ?? undefined,
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // Ignore localStorage errors (e.g., storage quota or security)
    }
  }

  private restoreFromStorage(): void {
    if (typeof localStorage === 'undefined') return;
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const parsed: AppState = JSON.parse(raw);
      if (parsed && parsed.monster) {
        this.tasks.set(parsed.tasks || []);
        this.monster.set(parsed.monster);
        if (parsed.examDateIso) {
          this.examDateIso.set(parsed.examDateIso);
        }
        // Immediately evaluate offline elapsed time
        this.evaluateTime(Date.now());
      }
    } catch {
      // Keep defaults on parse failure
    }
  }
}
