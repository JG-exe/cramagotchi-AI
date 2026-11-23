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

/** One upcoming exam, contributing its own countdown. */
@TsExport
@Serializable
data class Exam(
    val id: String,
    val subjectTag: String? = null,
    /** ISO date, `YYYY-MM-DD`. */
    val dateIso: String
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
    val sleepUntil: Double? = null
)

@TsExport
@Serializable
data class AppState(
    val tasks: Array<StudyTask> = emptyArray(),
    val monster: MonsterState,
    /** Legacy single-exam field — kept for deserialization of old storage. */
    val examDateIso: String? = null,
    /** Active exams; the countdown targets the nearest upcoming one. */
    val exams: List<Exam> = emptyList()
)
