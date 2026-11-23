package com.cramagotchi.engine

import com.cramagotchi.model.*
import com.cramagotchi.export.TsExport

/**
 * Pure, deterministic state machine for Cramagotchi.
 * All methods are side-effect-free and return new state.
 */
@TsExport
object CramagotchiEngine {

    private const val ID_PREFIX = "task-"

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

    /** Add a new uncompleted task to the state. */
    fun addTask(state: AppState, title: String, weight: TaskWeight, now: Double, subjectTag: String? = null): AppState {
        val newTask = StudyTask(
            id = nextId(state),
            title = title,
            subjectTag = subjectTag,
            weight = weight,
            completed = false,
            createdAt = now,
            completedAt = null
        )
        return state.copy(
            tasks = state.tasks + newTask
        )
    }

    /** Mark a task as completed: award XP, feed the monster, start eat/sleep cycle. */
    fun completeTask(state: AppState, taskId: String, now: Double): AppState {
        val taskIndex = state.tasks.indexOfFirst { it.id == taskId }
        if (taskIndex == -1) return state

        val task = state.tasks[taskIndex]
        if (task.completed) return state

        // Mark the task as completed
        val updatedTasks = state.tasks.copyOf()
        updatedTasks[taskIndex] = task.copy(completed = true, completedAt = now)

        // Award XP
        val newXp = state.monster.xp + task.weight.xpValue
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
     * `examDateIso` must be `YYYY-MM-DD` (as produced by `<input type="date">`).
     */
    fun examCountdownDays(state: AppState, now: Double): Int? {
        val iso = state.examDateIso ?: return null
        val examDay = isoDaysFromCivil(iso) ?: return null
        val todayDay = kotlin.math.floor(now / MILLIS_PER_DAY)
        return (examDay - todayDay).toInt()
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
