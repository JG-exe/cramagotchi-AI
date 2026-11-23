package com.cramagotchi.engine

import com.cramagotchi.model.*
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertTrue

/**
 * TDD suite for finishing a deadline/exam early (user story: "finish option
 * with bonus XP").
 *
 * Contract:
 *  - `finishExam(state, examId, now, hueRng)` removes the entry from the
 *    portfolio (like removeExam) AND feeds the monster the awarded XP.
 *  - EXAM-kind entries are NEVER finishable — the exam day is its own
 *    milestone — so finishing one is a no-op; only plain deadlines finish.
 *  - `earlyFinishXp(daysRemaining)` = base 25 + tier bonus: 0 bonus on/after
 *    the due day (days <= 0), +10 at 1–2 days, +20 at 3–6 days, +35 at ≥7
 *    days. Never negative, no punishment for finishing late.
 *  - Finishing feeds the monster exactly like completing a task: EATING
 *    3 s → SLEEPING 25 min; while SLEEPING the XP queues without resetting
 *    the sleep timer.
 *  - Crossing an evolution threshold while finishing ALSO unlocks the new
 *    stage species into the collection (see MonsterCollectionTest).
 */
class FinishExamTest {

    private val baseTime = 1_700_000_000_000.0
    // 2026-12-01 12:00 UTC
    private val dec1 = 1_796_126_400_000.0
    private val millisPerDay = 86_400_000.0

    private fun freshState(): AppState = CramagotchiEngine.createInitialState("Munch", baseTime)

    private fun stateWithExamAt(dateIso: String): AppState =
        CramagotchiEngine.addExam(freshState(), "HISTORY", dateIso, baseTime)

    // ── pure tier function ───────────────────────────────────

    @Test
    fun testEarlyFinishXpBaseIsTheFloor() {
        assertEquals(25, CramagotchiEngine.earlyFinishXp(0))
        assertEquals(25, CramagotchiEngine.earlyFinishXp(-3))
    }

    @Test
    fun testEarlyFinishXpGrowsWithLeadTime() {
        assertEquals(35, CramagotchiEngine.earlyFinishXp(1))
        assertEquals(35, CramagotchiEngine.earlyFinishXp(2))
        assertEquals(45, CramagotchiEngine.earlyFinishXp(3))
        assertEquals(45, CramagotchiEngine.earlyFinishXp(6))
        assertTrue(CramagotchiEngine.earlyFinishXp(7) >= 60)
        assertEquals(60, CramagotchiEngine.earlyFinishXp(30))
    }

    // ── finishExam behaviour ─────────────────────────────────

    @Test
    fun testFinishOnDueDayRemovesEntryAndAwardsBaseOnly() {
        val state = stateWithExamAt("2026-12-01")
        val finished = CramagotchiEngine.finishExam(state, state.exams[0].id, dec1)
        assertEquals(0, finished.exams.size)
        assertEquals(25, finished.monster.xp)
    }

    @Test
    fun testFinishAfterDueDayAlsoAwardsBaseOnly() {
        val state = stateWithExamAt("2026-11-27")
        val finished = CramagotchiEngine.finishExam(state, state.exams[0].id, dec1)
        assertEquals(25, finished.monster.xp)
    }

    @Test
    fun testFinishEarlyAwardsTierBonus() {
        // 10 days out → base 25 + 35
        val far = CramagotchiEngine.finishExam(stateWithExamAt("2026-12-11"), "exam-1", dec1)
        assertEquals(60, far.monster.xp)

        // 4 days out → base 25 + 20
        val mid = CramagotchiEngine.finishExam(stateWithExamAt("2026-12-05"), "exam-1", dec1)
        assertEquals(45, mid.monster.xp)

        // 2 days out → base 25 + 10
        val near = CramagotchiEngine.finishExam(stateWithExamAt("2026-12-03"), "exam-1", dec1)
        assertEquals(35, near.monster.xp)
    }

    @Test
    fun testFinishFeedsMonsterLikeCompletingTask() {
        val state = stateWithExamAt("2026-12-11")
        val finished = CramagotchiEngine.finishExam(state, "exam-1", dec1)
        assertEquals(MonsterStatus.EATING, finished.monster.status)
        assertEquals(dec1 + 3000.0, finished.monster.eatingUntil)
        assertEquals(dec1 + 1_503_000.0, finished.monster.sleepUntil)
    }

    @Test
    fun testFinishWhileSleepingKeepsSleepTimer() {
        val withExam = stateWithExamAt("2026-12-11")
        // Complete a task, then advance past the 3 s eating window to fall asleep.
        val eating = CramagotchiEngine.addTask(withExam, "Chapter 11", TaskWeight.MEAL, baseTime)
        val sleeping = CramagotchiEngine.evaluateTime(
            CramagotchiEngine.completeTask(eating, "task-1", baseTime),
            baseTime + 3000.0 + 1.0
        )
        val sleepUntilBefore = sleeping.monster.sleepUntil

        val finished = CramagotchiEngine.finishExam(sleeping, "exam-1", dec1)
        assertEquals(MonsterStatus.SLEEPING, finished.monster.status)
        assertEquals(sleepUntilBefore, finished.monster.sleepUntil)
        // XP still awarded (10 days out: base 25 + 35, on top of the earlier task's 25)
        assertEquals(85, finished.monster.xp)
        assertEquals(0, finished.exams.size)
    }

    @Test
    fun testFinishUnknownExamIsNoOp() {
        val state = stateWithExamAt("2026-12-11")
        val finished = CramagotchiEngine.finishExam(state, "exam-404", dec1)
        assertEquals(state, finished)
    }

    @Test
    fun testExamKindEntriesCanNeverBeFinished() {
        val state = CramagotchiEngine.addExam(
            freshState(), "HISTORY", "2026-12-11", baseTime, ExamKind.EXAM
        )
        val refused = CramagotchiEngine.finishExam(state, "exam-1", dec1)
        assertEquals(state, refused)
        assertEquals(1, refused.exams.size)
        assertEquals(0, refused.monster.xp)
    }
}
