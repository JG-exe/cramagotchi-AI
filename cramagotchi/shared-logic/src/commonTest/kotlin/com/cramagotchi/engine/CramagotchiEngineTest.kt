package com.cramagotchi.engine

import com.cramagotchi.model.*
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertNotNull
import kotlin.test.assertNull
import kotlin.test.assertTrue

/**
 * TDD Test Suite for CramagotchiEngine.
 * These 7 tests cover the full state machine specified in agents.md §7-A.
 * All tests are written FIRST and must be reviewed before implementation begins.
 */
class CramagotchiEngineTest {

    // ── Helpers ──────────────────────────────────────────────

    private val baseTime = 1_700_000_000_000.0 // Arbitrary fixed epoch millis

    private fun freshState(now: Double = baseTime): AppState =
        CramagotchiEngine.createInitialState("Munch", now)

    // ── Test 1: Adding a task ────────────────────────────────

    @Test
    fun testAddTaskCreatesUncompletedTask() {
        val state = freshState()
        val updated = CramagotchiEngine.addTask(
            state = state,
            title = "Finish Chapter 11",
            weight = TaskWeight.MEAL,
            now = baseTime
        )

        assertEquals(1, updated.tasks.size, "Should have exactly 1 task")
        val task = updated.tasks[0]
        assertEquals("Finish Chapter 11", task.title)
        assertEquals(TaskWeight.MEAL, task.weight)
        assertFalse(task.completed, "New task must be uncompleted")
        assertNull(task.completedAt, "completedAt must be null")
        assertEquals(baseTime, task.createdAt)

        // Monster state must be preserved (unchanged)
        assertEquals(state.monster.xp, updated.monster.xp)
        assertEquals(state.monster.status, updated.monster.status)
    }

    // ── Test 2: Completing a task feeds monster & starts cycle ─

    @Test
    fun testCompleteTaskFeedsMonsterAndStartsEatSleepCycle() {
        val T = baseTime
        val state = CramagotchiEngine.addTask(
            state = freshState(T),
            title = "Review Flashcards",
            weight = TaskWeight.MEAL,
            now = T
        )
        val taskId = state.tasks[0].id

        val updated = CramagotchiEngine.completeTask(state, taskId, T)

        // Task is marked complete
        assertTrue(updated.tasks[0].completed, "Task should be marked completed")
        assertEquals(T, updated.tasks[0].completedAt)

        // Monster gets XP
        assertEquals(25, updated.monster.xp, "MEAL awards 25 XP")

        // Monster enters EATING state
        assertEquals(MonsterStatus.EATING, updated.monster.status)
        assertEquals(T + 3_000.0, updated.monster.eatingUntil)
        assertEquals(T + 1_503_000.0, updated.monster.sleepUntil)

        // lastFedAt updated
        assertEquals(T, updated.monster.lastFedAt)
    }

    // ── Test 3: Time evaluation transitions ──────────────────

    @Test
    fun testEvaluateTimeTransitionsEatingToSleepingToIdle() {
        val T = baseTime

        // Set up a monster that just started eating
        val state = freshState(T).let { s ->
            val withTask = CramagotchiEngine.addTask(s, "Study", TaskWeight.MEAL, T)
            CramagotchiEngine.completeTask(withTask, withTask.tasks[0].id, T)
        }

        // After 3001ms: EATING → SLEEPING
        val afterEating = CramagotchiEngine.evaluateTime(state, T + 3_001.0)
        assertEquals(
            MonsterStatus.SLEEPING,
            afterEating.monster.status,
            "Should transition from EATING to SLEEPING after eatingUntil"
        )

        // After 1503001ms: SLEEPING → IDLE
        val afterSleeping = CramagotchiEngine.evaluateTime(state, T + 1_503_001.0)
        assertEquals(
            MonsterStatus.IDLE,
            afterSleeping.monster.status,
            "Should transition from SLEEPING to IDLE after sleepUntil"
        )
    }

    // ── Test 4: Completing task while sleeping ───────────────

    @Test
    fun testCompletingTaskWhileSleepingQueuesXpWithoutResettingTimer() {
        val T = baseTime

        // Create a sleeping monster with existing sleep timer
        val sleepUntil = T + 1_000_000.0
        val sleepingMonster = MonsterState(
            name = "Munch",
            xp = 50,
            stage = EvolutionStage.HATCHLING,
            status = MonsterStatus.SLEEPING,
            lastFedAt = T,
            eatingUntil = null,
            sleepUntil = sleepUntil
        )
        val stateWithSleepingMonster = AppState(
            tasks = emptyArray(),
            monster = sleepingMonster
        )

        // Add and complete a SNACK task
        val withTask = CramagotchiEngine.addTask(
            stateWithSleepingMonster, "Quick Review", TaskWeight.SNACK, T + 500_000.0
        )
        val updated = CramagotchiEngine.completeTask(withTask, withTask.tasks[0].id, T + 500_000.0)

        // XP should increase by 10
        assertEquals(60, updated.monster.xp, "SNACK adds 10 XP to existing 50")

        // Status must remain SLEEPING
        assertEquals(MonsterStatus.SLEEPING, updated.monster.status, "Must stay SLEEPING")

        // sleepUntil must NOT be reset
        assertEquals(sleepUntil, updated.monster.sleepUntil, "sleepUntil must remain unchanged")
    }

    // ── Test 5: Zero-punishment hunger after 24h ─────────────

    @Test
    fun testZeroPunishmentHungerAfter24Hours() {
        val T = baseTime

        // Monster with 120 XP, last fed at T, currently IDLE
        val idleMonster = MonsterState(
            name = "Munch",
            xp = 120,
            stage = EvolutionStage.HATCHLING,
            status = MonsterStatus.IDLE,
            lastFedAt = T
        )
        val state = AppState(tasks = emptyArray(), monster = idleMonster)

        // Evaluate at T + 24h + 1ms
        val updated = CramagotchiEngine.evaluateTime(state, T + 86_400_001.0)

        // Status becomes HUNGRY
        assertEquals(
            MonsterStatus.HUNGRY,
            updated.monster.status,
            "Should become HUNGRY after 24h without feeding"
        )

        // XP must NOT decay — zero punishment
        assertEquals(120, updated.monster.xp, "XP must never decay")
    }

    // ── Test 6: Evolution stage progression ──────────────────

    @Test
    fun testEvolutionStageProgression() {
        // Below 50 → EGG
        assertEquals(EvolutionStage.EGG, CramagotchiEngine.calculateEvolution(0))
        assertEquals(EvolutionStage.EGG, CramagotchiEngine.calculateEvolution(49))

        // 50-149 → HATCHLING
        assertEquals(EvolutionStage.HATCHLING, CramagotchiEngine.calculateEvolution(50))
        assertEquals(EvolutionStage.HATCHLING, CramagotchiEngine.calculateEvolution(149))

        // 150-299 → SCHOLAR
        assertEquals(EvolutionStage.SCHOLAR, CramagotchiEngine.calculateEvolution(150))
        assertEquals(EvolutionStage.SCHOLAR, CramagotchiEngine.calculateEvolution(299))

        // 300+ → GRADUATED_BEAST
        assertEquals(EvolutionStage.GRADUATED_BEAST, CramagotchiEngine.calculateEvolution(300))
        assertEquals(EvolutionStage.GRADUATED_BEAST, CramagotchiEngine.calculateEvolution(9999))
    }

    // ── Test 7: Offline browser reload recovery ──────────────

    @Test
    fun testOfflineBrowserReloadRecovery() {
        val T = baseTime

        // Simulate a monster that was SLEEPING when the browser was closed.
        // sleepUntil was T + 100_000, but "now" is T + 200_000 (browser reopened).
        val sleepingMonster = MonsterState(
            name = "Munch",
            xp = 80,
            stage = EvolutionStage.HATCHLING,
            status = MonsterStatus.SLEEPING,
            lastFedAt = T,
            sleepUntil = T + 100_000.0
        )
        val savedState = AppState(tasks = emptyArray(), monster = sleepingMonster)

        // Case A: Sleep timer expired but within 24h → IDLE
        val recoveredIdle = CramagotchiEngine.evaluateTime(savedState, T + 200_000.0)
        assertEquals(
            MonsterStatus.IDLE,
            recoveredIdle.monster.status,
            "Should resolve to IDLE when sleepUntil has passed and within 24h"
        )
        assertEquals(80, recoveredIdle.monster.xp, "XP must be preserved")

        // Case B: Sleep timer expired AND more than 24h since last fed → HUNGRY
        val recoveredHungry = CramagotchiEngine.evaluateTime(savedState, T + 86_500_000.0)
        assertEquals(
            MonsterStatus.HUNGRY,
            recoveredHungry.monster.status,
            "Should resolve to HUNGRY when both sleepUntil passed and >24h since fed"
        )
        assertEquals(80, recoveredHungry.monster.xp, "XP must never decay, even after long absence")
    }

    // ── Test 8: IDs stay unique after a state restore ────────

    @Test
    fun testTaskIdsStayUniqueAfterRestore() {
        // Simulate a state restored from storage that already contains "task-1";
        // a fresh in-memory counter would collide with it.
        val restored = CramagotchiEngine.addTask(
            freshState(),
            "Existing", TaskWeight.SNACK, baseTime
        )
        val afterRestore = CramagotchiEngine.addTask(restored, "New", TaskWeight.MEAL, baseTime + 1.0)

        assertTrue(
            afterRestore.tasks[0].id != afterRestore.tasks[1].id,
            "IDs added after a restore must not collide with restored task IDs"
        )
    }

    // ── Test 9: Exam countdown is computed by the KMP engine ──

    /**
     * agents.md §5 (Should Have): the exam countdown must be calculated via
     * KMP logic, not in the UI layer. `examCountdownDays(state, now)` returns
     * the whole-day difference between the UTC calendar day of `examDateIso`
     * and the UTC calendar day of `now`, or null when no exam date is set.
     */
    private fun stateWithExamDate(examDateIso: String?): AppState =
        CramagotchiEngine.createInitialState("Munch", baseTime)
            .copy(examDateIso = examDateIso)

    @Test
    fun testExamCountdownReturnsNullWhenNoExamDate() {
        assertNull(
            CramagotchiEngine.examCountdownDays(stateWithExamDate(null), baseTime),
            "No exam date configured → countdown must be null"
        )
    }

    @Test
    fun testExamCountdownCountsWholeCalendarDays() {
        // 2026-12-01 12:00 UTC; exam on 2026-12-11 → exactly 10 days
        val now = 1_796_126_400_000.0
        val state = stateWithExamDate("2026-12-11")
        assertEquals(
            10,
            CramagotchiEngine.examCountdownDays(state, now),
            "Countdown must be whole calendar days, independent of time-of-day"
        )

        // Same exam date, evaluated later the same day (23:00 UTC) → still 10
        val laterSameDay = now + 11 * 3_600_000.0
        assertEquals(
            10,
            CramagotchiEngine.examCountdownDays(state, laterSameDay),
            "Countdown must not drift within the same calendar day"
        )
    }

    @Test
    fun testExamCountdownIsZeroOnExamDayAndNegativeAfter() {
        val state = stateWithExamDate("2026-12-11")

        val examDayMorning = 1_796_976_000_000.0 // 2026-12-11 08:00 UTC
        assertEquals(
            0,
            CramagotchiEngine.examCountdownDays(state, examDayMorning),
            "On the exam day itself the countdown must read 0"
        )

        val dayAfter = examDayMorning + 24 * 3_600_000.0 // 2026-12-12 08:00 UTC
        assertEquals(
            -1,
            CramagotchiEngine.examCountdownDays(state, dayAfter),
            "After the exam day the countdown turns negative (exam missed)"
        )
    }
}
