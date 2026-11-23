package com.cramagotchi.engine

import com.cramagotchi.model.*
import kotlin.js.JsExport

/**
 * Pure, deterministic state machine for Cramagotchi.
 * All methods are side-effect-free and return new state.
 */
@JsExport
object CramagotchiEngine {

    private var idCounter: Int = 0

    private fun nextId(): String = "task-${++idCounter}"

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
            id = nextId(),
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
}
