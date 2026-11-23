package com.cramagotchi.engine

import com.cramagotchi.model.*
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertNull

/**
 * TDD suite for gamified, time-estimated XP rewards (user story 2).
 *
 * Contract (agents.md spec additions):
 *  - Tasks carry an OPTIONAL estimated duration in minutes.
 *  - XP for a completion = round(base * timeVariation * accuracyBonus)
 *      * base       = TaskWeight.xpValue (SNACK 10, MEAL 25 — never negative)
 *      * timeVariation = 0.85 + 0.30 * rng ∈ [0.85, 1.15]
 *          (slight, deterministic-per-seed variability; the engine stays pure:
 *           the caller supplies `rng` ∈ [0,1])
 *      * accuracyBonus = 1.5 when the user supplied an estimate AND actual
 *          minutes with |actual − estimate| ≤ 25% of the estimate, else 1.0.
 *  - The awarded amount is hidden until completion: `awardedXp` is null on
 *    uncompleted tasks and recorded on completion. XP is never reduced below
 *    the variability floor (zero-punishment: a bad estimate is not punished).
 *
 * Written FIRST — must be reviewed before implementation.
 */
class EstimationXpTest {

    private val baseTime = 1_700_000_000_000.0

    private fun stateWithTask(
        estimate: Double?,
        weight: TaskWeight = TaskWeight.MEAL
    ): AppState = CramagotchiEngine.addTask(
        CramagotchiEngine.createInitialState("Munch", baseTime),
        "Study", weight, baseTime, null, estimate
    )

    // ── Estimate is stored on the task ──────────────────────

    @Test
    fun testAddTaskStoresEstimatedMinutes() {
        val task = stateWithTask(40.0).tasks[0]
        assertEquals(40.0, task.estimatedMinutes, "Estimate (minutes) must be persisted on the task")
    }

    @Test
    fun testAddTaskWithoutEstimateLeavesItNull() {
        assertNull(stateWithTask(null).tasks[0].estimatedMinutes)
    }

    // ── The awarded XP stays hidden until completion ─────────

    @Test
    fun testAwardedXpHiddenUntilCompletion() {
        assertNull(stateWithTask(40.0).tasks[0].awardedXp, "Uncompleted tasks must not reveal awarded XP")
    }

    @Test
    fun testCompletionRecordsAwardedXpOnTheTask() {
        val completed = CramagotchiEngine.completeTask(stateWithTask(null), "task-1", baseTime)
        assertEquals(25, completed.tasks[0].awardedXp, "Default rng=0.5 → variation factor exactly 1.0 → base 25")
    }

    // ── Slightly variable XP (rng-driven, deterministic) ─────

    @Test
    fun testVariableXpStaysWithinEightyFiveToOneHundredAndFifteenPercent() {
        val state = stateWithTask(null)

        val low = CramagotchiEngine.completeTask(state, "task-1", baseTime, null, 0.0)
        // 25 * 0.85 = 21.25 → 21
        assertEquals(21, low.tasks[0].awardedXp, "rng=0.0 must award the 85% floor")

        val high = CramagotchiEngine.completeTask(state, "task-1", baseTime, null, 1.0)
        // 25 * 1.15 = 28.75 → 29
        assertEquals(29, high.tasks[0].awardedXp, "rng=1.0 must award the 115% ceiling")
    }

    @Test
    fun testSnackVariabilityUsesSnackBase() {
        val snack = CramagotchiEngine.addTask(
            CramagotchiEngine.createInitialState("Munch", baseTime),
            "Quick", TaskWeight.SNACK, baseTime
        )
        val completed = CramagotchiEngine.completeTask(snack, "task-1", baseTime, null, 1.0)
        // 10 * 1.15 = 11.5 → 12
        assertEquals(12, completed.tasks[0].awardedXp)
    }

    // ── Accurate estimation boosts XP ────────────────────────

    @Test
    fun testAccurateEstimateAwardsFiftyPercentBonus() {
        // estimate 40 min, took 36 min → |4| ≤ 25% × 40 → bonus: 25 × 1.5 = 37.5 → 38
        val completed = CramagotchiEngine.completeTask(stateWithTask(40.0), "task-1", baseTime, 36.0, 0.5)
        assertEquals(38, completed.tasks[0].awardedXp)
    }

    @Test
    fun testEstimateBoundaryIsInclusive() {
        // actual = estimate × 1.25 → exactly at the tolerance edge → still a bonus
        val completed = CramagotchiEngine.completeTask(stateWithTask(40.0), "task-1", baseTime, 50.0, 0.5)
        assertEquals(38, completed.tasks[0].awardedXp)
    }

    @Test
    fun testInaccurateEstimateIsNeverPunished() {
        // actual = 5× the estimate → no bonus, but no penalty either: 25 × 1.0 = 25
        val completed = CramagotchiEngine.completeTask(stateWithTask(40.0), "task-1", baseTime, 200.0, 0.5)
        assertEquals(25, completed.tasks[0].awardedXp)
    }

    @Test
    fun testMissingActualEsNeverYieldsBonus() {
        // estimate given but user never recorded the actual time → pure base × variation
        val completed = CramagotchiEngine.completeTask(stateWithTask(40.0), "task-1", baseTime, null, 0.5)
        assertEquals(25, completed.tasks[0].awardedXp)
    }
}
