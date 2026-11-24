package com.cramagotchi.model

import com.cramagotchi.export.TsExport
import kotlinx.serialization.Serializable

@TsExport
enum class TaskWeight(val xpValue: Int) {
    SNACK(10),
    MEAL(25)
}

@TsExport
enum class MonsterStatus {
    IDLE,
    HUNGRY,
    EATING,
    SLEEPING
}

@TsExport
enum class EvolutionStage(val level: Int, val minXp: Int) {
    EGG(1, 0),
    HATCHLING(2, 50),
    SCHOLAR(3, 150),
    GRADUATED_BEAST(4, 300)
}

/**
 * What kind of dated item this entry is. Every dated item is by default a
 * plain DEADLINE; flipping it to EXAM marks it as the high-stakes variant
 * (a deadline the user upgraded, e.g. the actual exam day).
 */
@TsExport
enum class ExamKind {
    DEADLINE,
    EXAM
}

@TsExport
@Serializable
data class StudyTask(
    val id: String,
    val title: String,
    val subjectTag: String? = null,
    val weight: TaskWeight,
    val completed: Boolean = false,
    val createdAt: Double,
    val completedAt: Double? = null,
    /** Minutes the user estimated this task would take (null = no estimate). */
    val estimatedMinutes: Double? = null,
    /** Actual XP awarded at completion — hidden from the UI until then. */
    val awardedXp: Int? = null
)

/**
 * One upcoming exam or deadline, contributing its own countdown.
 * `kind` defaults to DEADLINE, so legacy payloads (written before the
 * deadline/exam distinction existed) deserialise as plain deadlines.
 */
@TsExport
@Serializable
data class Exam(
    val id: String,
    val subjectTag: String? = null,
    /** ISO date, `YYYY-MM-DD`. */
    val dateIso: String,
    val kind: ExamKind = ExamKind.DEADLINE
)

@TsExport
@Serializable
data class MonsterState(
    val name: String = "Munch",
    val xp: Int = 0,
    val stage: EvolutionStage = EvolutionStage.EGG,
    val status: MonsterStatus = MonsterStatus.IDLE,
    val lastFedAt: Double,
    val eatingUntil: Double? = null,
    val sleepUntil: Double? = null,
    /**
     * The active creature's own tint (∈ 0..359), rolled at creation and
     * re-rolled only when a fully-grown monster graduates and a fresh one
     * spawns. Null on legacy saves until [reconcileCollection] backfills it
     * from the roster; null means "use the default stage fill".
     */
    val hue: Int? = null
)

/**
 * One retired monster in the collected gallery. Only fully-evolved
 * (GRADUATED_BEAST) monsters enter the roster — each cycle adds one entry —
 * and the entry freezes the state the creature retired in: its unique hue
 * (the same colour it wore through every evolution) and a randomly chosen
 * ambient pose (sleeping or idling), persisted with the save.
 *
 * `speciesId` names the visual variant (an [EvolutionStage] name — currently
 * always GRADUATED_BEAST); kept as a string so old saves deserialise and the
 * art-symbol lookup stays generic.
 */
@TsExport
@Serializable
data class CollectedMonster(
    val speciesId: String,
    val hue: Int,
    val collectedAt: Double,
    /** Roaming pose of the retired monster in the gallery (otherwise idle). */
    val sleeping: Boolean = false
)

@TsExport
@Serializable
data class AppState(
    val tasks: Array<StudyTask> = emptyArray(),
    val monster: MonsterState,
    /** Legacy single-exam field — kept for deserialization of old storage. */
    val examDateIso: String? = null,
    /** Active exams and deadlines; the countdown targets the nearest upcoming one. */
    val exams: List<Exam> = emptyList(),
    /** Collectible roster — every species variant reached so far, with its rolled hue. */
    val collection: List<CollectedMonster> = emptyList()
)
