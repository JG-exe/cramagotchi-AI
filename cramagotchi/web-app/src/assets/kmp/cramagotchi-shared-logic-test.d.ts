type Nullable<T> = T | null | undefined
export declare namespace com.cramagotchi.engine {
    const CramagotchiEngine: {
        createInitialState(monsterName: string, now: number): com.cramagotchi.model.AppState;
        addTask(state: com.cramagotchi.model.AppState, title: string, weight: com.cramagotchi.model.TaskWeight, now: number, subjectTag?: Nullable<string>): com.cramagotchi.model.AppState;
        completeTask(state: com.cramagotchi.model.AppState, taskId: string, now: number): com.cramagotchi.model.AppState;
        deleteTask(state: com.cramagotchi.model.AppState, taskId: string): com.cramagotchi.model.AppState;
        evaluateTime(state: com.cramagotchi.model.AppState, now: number): com.cramagotchi.model.AppState;
        calculateEvolution(xp: number): com.cramagotchi.model.EvolutionStage;
    };
}
export declare namespace com.cramagotchi.model {
    abstract class TaskWeight {
        private constructor();
        get xpValue(): number;
        static get SNACK(): com.cramagotchi.model.TaskWeight & {
            get name(): "SNACK";
            get ordinal(): 0;
        };
        static get MEAL(): com.cramagotchi.model.TaskWeight & {
            get name(): "MEAL";
            get ordinal(): 1;
        };
        static values(): Array<com.cramagotchi.model.TaskWeight>;
        static valueOf(value: string): com.cramagotchi.model.TaskWeight;
        get name(): "SNACK" | "MEAL";
        get ordinal(): 0 | 1;
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
        static values(): Array<com.cramagotchi.model.MonsterStatus>;
        static valueOf(value: string): com.cramagotchi.model.MonsterStatus;
        get name(): "IDLE" | "HUNGRY" | "EATING" | "SLEEPING";
        get ordinal(): 0 | 1 | 2 | 3;
    }
    abstract class EvolutionStage {
        private constructor();
        get level(): number;
        get minXp(): number;
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
        static values(): Array<com.cramagotchi.model.EvolutionStage>;
        static valueOf(value: string): com.cramagotchi.model.EvolutionStage;
        get name(): "EGG" | "HATCHLING" | "SCHOLAR" | "GRADUATED_BEAST";
        get ordinal(): 0 | 1 | 2 | 3;
    }
    class StudyTask {
        constructor(id: string, title: string, subjectTag: Nullable<string> | undefined, weight: com.cramagotchi.model.TaskWeight, completed: boolean | undefined, createdAt: number, completedAt?: Nullable<number>);
        get id(): string;
        get title(): string;
        get subjectTag(): Nullable<string>;
        get weight(): com.cramagotchi.model.TaskWeight;
        get completed(): boolean;
        get createdAt(): number;
        get completedAt(): Nullable<number>;
        copy(id?: string, title?: string, subjectTag?: Nullable<string>, weight?: com.cramagotchi.model.TaskWeight, completed?: boolean, createdAt?: number, completedAt?: Nullable<number>): com.cramagotchi.model.StudyTask;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
    class MonsterState {
        constructor(name: string | undefined, xp: number | undefined, stage: com.cramagotchi.model.EvolutionStage | undefined, status: com.cramagotchi.model.MonsterStatus | undefined, lastFedAt: number, eatingUntil?: Nullable<number>, sleepUntil?: Nullable<number>);
        get name(): string;
        get xp(): number;
        get stage(): com.cramagotchi.model.EvolutionStage;
        get status(): com.cramagotchi.model.MonsterStatus;
        get lastFedAt(): number;
        get eatingUntil(): Nullable<number>;
        get sleepUntil(): Nullable<number>;
        copy(name?: string, xp?: number, stage?: com.cramagotchi.model.EvolutionStage, status?: com.cramagotchi.model.MonsterStatus, lastFedAt?: number, eatingUntil?: Nullable<number>, sleepUntil?: Nullable<number>): com.cramagotchi.model.MonsterState;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
    class AppState {
        constructor(tasks: Array<com.cramagotchi.model.StudyTask> | undefined, monster: com.cramagotchi.model.MonsterState, examDateIso?: Nullable<string>);
        get tasks(): Array<com.cramagotchi.model.StudyTask>;
        get monster(): com.cramagotchi.model.MonsterState;
        get examDateIso(): Nullable<string>;
        copy(tasks?: Array<com.cramagotchi.model.StudyTask>, monster?: com.cramagotchi.model.MonsterState, examDateIso?: Nullable<string>): com.cramagotchi.model.AppState;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
}
export declare namespace com.cramagotchi.storage {
    const StorageRepository: {
        serialize(state: com.cramagotchi.model.AppState): string;
        deserialize(jsonStr: string): Nullable<com.cramagotchi.model.AppState>;
    };
}
export as namespace cramagotchi_shared_logic_test;