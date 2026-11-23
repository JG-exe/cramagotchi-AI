package com.cramagotchi.engine

import com.cramagotchi.model.*
import com.cramagotchi.export.TsExport
import kotlin.math.roundToInt

/**
 * Pure, deterministic state machine for Cramagotchi.
 * All methods are side-effect-free and return new state.
 */
@TsExport
object CramagotchiEngine {

    private const val ID_PREFIX = "task-"
    private const val EXAM_ID_PREFIX = "exam-"

    /**
     * Derive the next task ID from the highest existing numeric suffix.
     * Keeps IDs collision-free even after a state restore from storage,
     * where an in-memory counter would restart at 0.
     */
    private fun nextId(state: AppState): String {
        val highest = state.tasks
            .mapNotNull { it.id.removePrefix(ID_PREFIX).toIntOrNull() }
            .maxOrNull() ?: 0
        return ID_PREFIX + (highest + 1)
    }

    /** Same collision-free scheme as [nextId], for exam IDs. */
    private fun nextExamId(state: AppState): String {
        val highest = state.exams
            .mapNotNull { it.id.removePrefix(EXAM_ID_PREFIX).toIntOrNull() }
            .maxOrNull() ?: 0
        return EXAM_ID_PREFIX + (highest + 1)
    }

    /** Create a fresh AppState with the given monster name and current timestamp. */
    fun createInitialState(monsterName: String, now: Double): AppState {
        return AppState(
            tasks = emptyArray(),
            monster = MonsterState(
                name = monsterName,
                xp = 0,
                stage = EvolutionStage.EGG,
                status = MonsterStatus.IDLE,
                lastFedAt = now
            )
        )
    }

    /** Add a new uncompleted task to the state, with an optional time estimate. */
    fun addTask(
        state: AppState,
        title: String,
        weight: TaskWeight,
        now: Double,
        subjectTag: String? = null,
        estimatedMinutes: Double? = null
    ): AppState {
        val newTask = StudyTask(
            id = nextId(state),
            title = title,
            subjectTag = subjectTag,
            weight = weight,
            completed = false,
            createdAt = now,
            completedAt = null,
            estimatedMinutes = estimatedMinutes
        )
        return state.copy(
            tasks = state.tasks + newTask
        )
    }

    /**
     * Mark a task as completed: award XP, feed the monster, start eat/sleep cycle.
     *
     * XP = round(base × timeVariation × accuracyBonus):
     *  - base = task weight's xpValue;
     *  - timeVariation = 0.85 + 0.30 × rng (rng ∈ [0,1], supplied by the caller
     *    so this pure engine stays deterministic under test — a slight
     *    variability gamifies the reward);
     *  - accuracyBonus = 1.5 when the user supplied an estimate AND actual
     *    minutes with |actual − estimate| ≤ 25% of the estimate, else 1.0.
     * A wrong estimate is never punished (no penalty below the variation
     * floor). The actual amount is written to `awardedXp` — the UI must not
     * reveal it before completion.
     */
    fun completeTask(
        state: AppState,
        taskId: String,
        now: Double,
        actualMinutes: Double? = null,
        rng: Double = 0.5
    ): AppState {
        val taskIndex = state.tasks.indexOfFirst { it.id == taskId }
        if (taskIndex == -1) return state

        val task = state.tasks[taskIndex]
        if (task.completed) return state

        // Gamified XP: slight variability + estimation-accuracy bonus.
        val variation = 0.85 + 0.30 * rng.coerceIn(0.0, 1.0)
        val estimate = task.estimatedMinutes
        val accuracyBonus =
            if (estimate != null && actualMinutes != null &&
                kotlin.math.abs(actualMinutes - estimate) <= 0.25 * estimate
            ) 1.5 else 1.0
        val awardedXp = (task.weight.xpValue * variation * accuracyBonus).roundToInt()

        // Mark the task as completed
        val updatedTasks = state.tasks.copyOf()
        updatedTasks[taskIndex] = task.copy(
            completed = true,
            completedAt = now,
            awardedXp = awardedXp
        )

        // Award XP
        val newXp = state.monster.xp + awardedXp
        val newStage = calculateEvolution(newXp)

        // Determine monster status and timers
        val monster = state.monster
        val newMonster = if (monster.status == MonsterStatus.SLEEPING) {
            // Anti-distraction lock: award XP but keep sleeping, don't reset timer
            monster.copy(
                xp = newXp,
                stage = newStage,
                lastFedAt = now
            )
        } else {
            // Normal feeding: start eat → sleep cycle
            monster.copy(
                xp = newXp,
                stage = newStage,
                status = MonsterStatus.EATING,
                lastFedAt = now,
                eatingUntil = now + 3_000.0,
                sleepUntil = now + 1_503_000.0
            )
        }

        return state.copy(
            tasks = updatedTasks,
            monster = newMonster
        )
    }

    /** Delete a task by ID (only uncompleted tasks). */
    fun deleteTask(state: AppState, taskId: String): AppState {
        return state.copy(
            tasks = state.tasks.filter { it.id != taskId || it.completed }.toTypedArray()
        )
    }

    /** Evaluate elapsed time: transition EATING→SLEEPING→IDLE, check 24h hunger. */
    fun evaluateTime(state: AppState, now: Double): AppState {
        val monster = state.monster
        var newStatus = monster.status
        var newEatingUntil = monster.eatingUntil
        var newSleepUntil = monster.sleepUntil

        // Resolve EATING → SLEEPING transition
        if (newStatus == MonsterStatus.EATING) {
            val eatingEnd = monster.eatingUntil
            if (eatingEnd != null && now > eatingEnd) {
                newStatus = MonsterStatus.SLEEPING
                newEatingUntil = null
            }
        }

        // Resolve SLEEPING → IDLE transition
        if (newStatus == MonsterStatus.SLEEPING) {
            val sleepEnd = monster.sleepUntil
            if (sleepEnd != null && now > sleepEnd) {
                newStatus = MonsterStatus.IDLE
                newSleepUntil = null
            }
        }

        // Check 24h hunger (only if IDLE — not eating or sleeping)
        if (newStatus == MonsterStatus.IDLE) {
            if (now - monster.lastFedAt > 86_400_000.0) {
                newStatus = MonsterStatus.HUNGRY
            }
        }

        return state.copy(
            monster = monster.copy(
                status = newStatus,
                eatingUntil = newEatingUntil,
                sleepUntil = newSleepUntil
            )
        )
    }

    /** Calculate the correct EvolutionStage for a given XP total. */
    fun calculateEvolution(xp: Int): EvolutionStage {
        return when {
            xp >= 300 -> EvolutionStage.GRADUATED_BEAST
            xp >= 150 -> EvolutionStage.SCHOLAR
            xp >= 50 -> EvolutionStage.HATCHLING
            else -> EvolutionStage.EGG
        }
    }

    /**
     * Days remaining until the exam (agents.md §5 Should Have), computed by
     * the KMP engine so every platform shares one implementation.
     *
     * The countdown is a whole-calendar-day difference in UTC — independent
     * of the caller's local timezone and of the time-of-day inside `now` —
     * so the same state always evaluates identically on JS, desktop and
     * Android. Returns null when no exam date is set, 0 on the exam day
     * itself, and a negative value once the exam day has passed.
     *
     * Legacy single-date contract: reads only `state.examDateIso`. For the
     * multi-exam portfolio use [nearestExamDays].
     *
     * `examDateIso` must be `YYYY-MM-DD` (as produced by `<input type="date">`).
     */
    fun examCountdownDays(state: AppState, now: Double): Int? {
        val iso = state.examDateIso ?: return null
        val examDay = isoDaysFromCivil(iso) ?: return null
        val todayDay = kotlin.math.floor(now / MILLIS_PER_DAY)
        return (examDay - todayDay).toInt()
    }

    /**
     * Days until the nearest UPCOMING exam across the exam portfolio (and
     * the legacy `examDateIso` fallback), in whole UTC calendar days —
     * 0 on the exam day itself. Past exams are ignored when any future one
     * exists; returns null when nothing is upcoming.
     */
    fun nearestExamDays(state: AppState, now: Double): Int? {
        val todayDay = kotlin.math.floor(now / MILLIS_PER_DAY)
        val dates = state.exams.map { it.dateIso } + listOfNotNull(state.examDateIso)
        return dates
            .mapNotNull { iso -> isoDaysFromCivil(iso)?.let { (it - todayDay).toInt() } }
            .filter { it >= 0 }
            .minOrNull()
    }

    /** Add an exam to the portfolio, with a unique id. */
    fun addExam(state: AppState, subjectTag: String?, dateIso: String, now: Double): AppState {
        val exam = Exam(
            id = nextExamId(state),
            subjectTag = subjectTag?.trim()?.takeIf { it.isNotEmpty() },
            dateIso = dateIso
        )
        return state.copy(exams = state.exams + exam)
    }

    /** Remove an exam from the portfolio by id; the remaining exams keep their data. */
    fun removeExam(state: AppState, examId: String): AppState {
        return state.copy(exams = state.exams.filter { it.id != examId })
    }

    private const val MILLIS_PER_DAY = 86_400_000.0

    /**
     * Parse a `YYYY-MM-DD` string into a day count since the Unix epoch
     * (days from civil date algorithm — valid for the proleptic Gregorian
     * calendar, no fractional or DST adjustments).
     */
    private fun isoDaysFromCivil(iso: String): Double? {
        val parts = iso.split('-')
        if (parts.size != 3) return null
        val year = parts[0].toIntOrNull() ?: return null
        val month = parts[1].toIntOrNull() ?: return null
        val day = parts[2].toIntOrNull() ?: return null
        if (month !in 1..12 || day !in 1..31) return null

        val y = if (month <= 2) year - 1 else year
        val era = kotlin.math.floor(y / 400.0)
        val yoe = y - era * 400                                  // [0, 399]
        val mp = (month + 9) % 12                                // [0, 11]
        val doy = kotlin.math.floor((153 * mp + 2) / 5.0) + day - 1     // [0, 365]
        val doe = yoe * 365 + kotlin.math.floor(yoe / 4.0) - kotlin.math.floor(yoe / 100.0) + doy // [0, 146096]
        return era * 146_097 + doe - 719_468
    }
}
