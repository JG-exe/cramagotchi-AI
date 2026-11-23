type Nullable<T> = T | null | undefined
export declare namespace kotlin.collections {
    interface KtList<E> /* extends kotlin.collections.Collection<E> */ {
        asJsReadonlyArrayView(): ReadonlyArray<E>;
        readonly __doNotUseOrImplementIt: {
            readonly "kotlin.collections.KtList": unique symbol;
        };
    }
    const KtList: {
        fromJsArray<E>(array: ReadonlyArray<E>): kotlin.collections.KtList<E>;
    };
}
export declare namespace com.cramagotchi.engine {
    const CramagotchiEngine: {
        createInitialState(monsterName: string, now: number, seedHueRng?: number): com.cramagotchi.model.AppState;
        addTask(state: com.cramagotchi.model.AppState, title: string, weight: com.cramagotchi.model.TaskWeight, now: number, subjectTag?: Nullable<string>, estimatedMinutes?: Nullable<number>): com.cramagotchi.model.AppState;
        updateTask(state: com.cramagotchi.model.AppState, taskId: string, title: string, weight: com.cramagotchi.model.TaskWeight, subjectTag?: Nullable<string>, estimatedMinutes?: Nullable<number>): com.cramagotchi.model.AppState;
        completeTask(state: com.cramagotchi.model.AppState, taskId: string, now: number, actualMinutes?: Nullable<number>, rng?: number, hueRng?: number): com.cramagotchi.model.AppState;
        deleteTask(state: com.cramagotchi.model.AppState, taskId: string): com.cramagotchi.model.AppState;
        evaluateTime(state: com.cramagotchi.model.AppState, now: number): com.cramagotchi.model.AppState;
        calculateEvolution(xp: number): com.cramagotchi.model.EvolutionStage;
        examCountdownDays(state: com.cramagotchi.model.AppState, now: number): Nullable<number>;
        nearestExamDays(state: com.cramagotchi.model.AppState, now: number): Nullable<number>;
        nearestUpcomingExam(state: com.cramagotchi.model.AppState, now: number): Nullable<com.cramagotchi.model.Exam>;
        addExam(state: com.cramagotchi.model.AppState, subjectTag: Nullable<string>, dateIso: string, now: number, kind?: com.cramagotchi.model.ExamKind): com.cramagotchi.model.AppState;
        removeExam(state: com.cramagotchi.model.AppState, examId: string): com.cramagotchi.model.AppState;
        updateExam(state: com.cramagotchi.model.AppState, examId: string, subjectTag: Nullable<string>, dateIso: string, kind?: com.cramagotchi.model.ExamKind): com.cramagotchi.model.AppState;
        get BASE_FINISH_XP(): number;
        earlyFinishXp(daysRemaining: number): number;
        finishExam(state: com.cramagotchi.model.AppState, examId: string, now: number, hueRng?: number): com.cramagotchi.model.AppState;
        unlockCollectible(state: com.cramagotchi.model.AppState, speciesId: string, now: number, hueRng?: number): com.cramagotchi.model.AppState;
        reconcileCollection(state: com.cramagotchi.model.AppState, hueRng?: number): com.cramagotchi.model.AppState;
    };
}
export declare namespace com.cramagotchi.model {
    abstract class TaskWeight {
        private constructor();
        static get SNACK(): com.cramagotchi.model.TaskWeight & {
            get name(): "SNACK";
            get ordinal(): 0;
        };
        static get MEAL(): com.cramagotchi.model.TaskWeight & {
            get name(): "MEAL";
            get ordinal(): 1;
        };
        get name(): "SNACK" | "MEAL";
        get ordinal(): 0 | 1;
        get xpValue(): number;
        static values(): Array<com.cramagotchi.model.TaskWeight>;
        static valueOf(value: string): com.cramagotchi.model.TaskWeight;
    }
    abstract class MonsterStatus {
        private constructor();
        static get IDLE(): com.cramagotchi.model.MonsterStatus & {
            get name(): "IDLE";
            get ordinal(): 0;
        };
        static get HUNGRY(): com.cramagotchi.model.MonsterStatus & {
            get name(): "HUNGRY";
            get ordinal(): 1;
        };
        static get EATING(): com.cramagotchi.model.MonsterStatus & {
            get name(): "EATING";
            get ordinal(): 2;
        };
        static get SLEEPING(): com.cramagotchi.model.MonsterStatus & {
            get name(): "SLEEPING";
            get ordinal(): 3;
        };
        get name(): "IDLE" | "HUNGRY" | "EATING" | "SLEEPING";
        get ordinal(): 0 | 1 | 2 | 3;
        static values(): Array<com.cramagotchi.model.MonsterStatus>;
        static valueOf(value: string): com.cramagotchi.model.MonsterStatus;
    }
    abstract class EvolutionStage {
        private constructor();
        static get EGG(): com.cramagotchi.model.EvolutionStage & {
            get name(): "EGG";
            get ordinal(): 0;
        };
        static get HATCHLING(): com.cramagotchi.model.EvolutionStage & {
            get name(): "HATCHLING";
            get ordinal(): 1;
        };
        static get SCHOLAR(): com.cramagotchi.model.EvolutionStage & {
            get name(): "SCHOLAR";
            get ordinal(): 2;
        };
        static get GRADUATED_BEAST(): com.cramagotchi.model.EvolutionStage & {
            get name(): "GRADUATED_BEAST";
            get ordinal(): 3;
        };
        get name(): "EGG" | "HATCHLING" | "SCHOLAR" | "GRADUATED_BEAST";
        get ordinal(): 0 | 1 | 2 | 3;
        get level(): number;
        get minXp(): number;
        static values(): Array<com.cramagotchi.model.EvolutionStage>;
        static valueOf(value: string): com.cramagotchi.model.EvolutionStage;
    }
    abstract class ExamKind {
        private constructor();
        static get DEADLINE(): com.cramagotchi.model.ExamKind & {
            get name(): "DEADLINE";
            get ordinal(): 0;
        };
        static get EXAM(): com.cramagotchi.model.ExamKind & {
            get name(): "EXAM";
            get ordinal(): 1;
        };
        get name(): "DEADLINE" | "EXAM";
        get ordinal(): 0 | 1;
        static values(): Array<com.cramagotchi.model.ExamKind>;
        static valueOf(value: string): com.cramagotchi.model.ExamKind;
    }
    class StudyTask {
        constructor(id: string, title: string, subjectTag: Nullable<string> | undefined, weight: com.cramagotchi.model.TaskWeight, completed: boolean | undefined, createdAt: number, completedAt?: Nullable<number>, estimatedMinutes?: Nullable<number>, awardedXp?: Nullable<number>);
        get id(): string;
        get title(): string;
        get subjectTag(): Nullable<string>;
        get weight(): com.cramagotchi.model.TaskWeight;
        get completed(): boolean;
        get createdAt(): number;
        get completedAt(): Nullable<number>;
        get estimatedMinutes(): Nullable<number>;
        get awardedXp(): Nullable<number>;
        copy(id?: string, title?: string, subjectTag?: Nullable<string>, weight?: com.cramagotchi.model.TaskWeight, completed?: boolean, createdAt?: number, completedAt?: Nullable<number>, estimatedMinutes?: Nullable<number>, awardedXp?: Nullable<number>): com.cramagotchi.model.StudyTask;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
    class Exam {
        constructor(id: string, subjectTag: Nullable<string> | undefined, dateIso: string, kind?: com.cramagotchi.model.ExamKind);
        get id(): string;
        get subjectTag(): Nullable<string>;
        get dateIso(): string;
        get kind(): com.cramagotchi.model.ExamKind;
        copy(id?: string, subjectTag?: Nullable<string>, dateIso?: string, kind?: com.cramagotchi.model.ExamKind): com.cramagotchi.model.Exam;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
    class MonsterState {
        constructor(name: string | undefined, xp: number | undefined, stage: com.cramagotchi.model.EvolutionStage | undefined, status: com.cramagotchi.model.MonsterStatus | undefined, lastFedAt: number, eatingUntil?: Nullable<number>, sleepUntil?: Nullable<number>, hue?: Nullable<number>);
        get name(): string;
        get xp(): number;
        get stage(): com.cramagotchi.model.EvolutionStage;
        get status(): com.cramagotchi.model.MonsterStatus;
        get lastFedAt(): number;
        get eatingUntil(): Nullable<number>;
        get sleepUntil(): Nullable<number>;
        get hue(): Nullable<number>;
        copy(name?: string, xp?: number, stage?: com.cramagotchi.model.EvolutionStage, status?: com.cramagotchi.model.MonsterStatus, lastFedAt?: number, eatingUntil?: Nullable<number>, sleepUntil?: Nullable<number>, hue?: Nullable<number>): com.cramagotchi.model.MonsterState;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
    class CollectedMonster {
        constructor(speciesId: string, hue: number, collectedAt: number);
        get speciesId(): string;
        get hue(): number;
        get collectedAt(): number;
        copy(speciesId?: string, hue?: number, collectedAt?: number): com.cramagotchi.model.CollectedMonster;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
    class AppState {
        constructor(tasks: Array<com.cramagotchi.model.StudyTask> | undefined, monster: com.cramagotchi.model.MonsterState, examDateIso?: Nullable<string>, exams?: kotlin.collections.KtList<com.cramagotchi.model.Exam>, collection?: kotlin.collections.KtList<com.cramagotchi.model.CollectedMonster>);
        get tasks(): Array<com.cramagotchi.model.StudyTask>;
        get monster(): com.cramagotchi.model.MonsterState;
        get examDateIso(): Nullable<string>;
        get exams(): kotlin.collections.KtList<com.cramagotchi.model.Exam>;
        get collection(): kotlin.collections.KtList<com.cramagotchi.model.CollectedMonster>;
        copy(tasks?: Array<com.cramagotchi.model.StudyTask>, monster?: com.cramagotchi.model.MonsterState, examDateIso?: Nullable<string>, exams?: kotlin.collections.KtList<com.cramagotchi.model.Exam>, collection?: kotlin.collections.KtList<com.cramagotchi.model.CollectedMonster>): com.cramagotchi.model.AppState;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
}
export declare namespace com.cramagotchi.storage {
    const StorageRepository: {
        get STORAGE_KEY(): string;
        serialize(state: com.cramagotchi.model.AppState): string;
        deserialize(jsonStr: string): Nullable<com.cramagotchi.model.AppState>;
    };
}
export as namespace cramagotchi_shared_logic;