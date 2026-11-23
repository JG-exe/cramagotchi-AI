package com.cramagotchi.engine

import com.cramagotchi.model.*
import kotlin.js.JsExport

/**
 * Pure, deterministic state machine for Cramagotchi.
 * All methods are side-effect-free and return new state.
 *
 * STUB: function bodies are TODO() — will be implemented after test review.
 */
@JsExport
object CramagotchiEngine {

    /** Create a fresh AppState with the given monster name and current timestamp. */
    fun createInitialState(monsterName: String, now: Double): AppState {
        TODO("Implementation after test review")
    }

    /** Add a new uncompleted task to the state. */
    fun addTask(state: AppState, title: String, weight: TaskWeight, now: Double, subjectTag: String? = null): AppState {
        TODO("Implementation after test review")
    }

    /** Mark a task as completed: award XP, feed the monster, start eat/sleep cycle. */
    fun completeTask(state: AppState, taskId: String, now: Double): AppState {
        TODO("Implementation after test review")
    }

    /** Delete a task by ID (only uncompleted tasks). */
    fun deleteTask(state: AppState, taskId: String): AppState {
        TODO("Implementation after test review")
    }

    /** Evaluate elapsed time: transition EATING→SLEEPING→IDLE, check 24h hunger. */
    fun evaluateTime(state: AppState, now: Double): AppState {
        TODO("Implementation after test review")
    }

    /** Calculate the correct EvolutionStage for a given XP total. */
    fun calculateEvolution(xp: Int): EvolutionStage {
        TODO("Implementation after test review")
    }
}
