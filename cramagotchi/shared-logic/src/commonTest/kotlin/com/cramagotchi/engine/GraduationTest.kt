package com.cramagotchi.engine

import com.cramagotchi.model.*
import com.cramagotchi.storage.StorageRepository
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertNotEquals
import kotlin.test.assertTrue

/**
 * TDD suite for graduation + legacy reconciliation (user story: the
 * max-level monster is collected, then a brand-new monster spawns).
 *
 * Contract:
 *  - Crossing into the max stage (GRADUATED_BEAST, 300 XP) via completeTask
 *    or finishExam first collects every newly reached species (roster rules
 *    unchanged — one card per species, first hue sticks), then immediately
 *    spawns a FRESH monster: stage EGG, xp 0, status IDLE, timers cleared,
 *    and a new random hue rolled from the caller's hueRng (golden-ratio
 *    stir, so the next creature is visibly different).
 *  - Re-birth cycles re-cross the same species thresholds; the roster stays
 *    at four — no duplicates, hues never re-roll.
 *  - `reconcileCollection(state, hueRng)` backfills the roster with every
 *    species at or below the monster's current stage (legacy saves whose
 *    stage predates the collection feature), preserving existing hues, and
 *    backfills a null monster hue from its stage's roster entry.
 *  - MonsterState.hue: the active creature's own tint, rolled at creation
 *    and re-rolled only at graduation; null on legacy saves until
 *    reconciled.
 */
class GraduationTest {

    private val baseTime = 1_700_000_000_000.0

    private fun freshState(seedHueRng: Double = 0.5): AppState =
        CramagotchiEngine.createInitialState("Munch", baseTime, seedHueRng)

    /** Crop a state to "one meal away from max", whatever the roster says. */
    private fun nearMax(state: AppState): AppState = state.copy(
        monster = state.monster.copy(xp = 275, stage = EvolutionStage.EGG)
    )

    // ── graduation on task completion ────────────────────────

    @Test
    fun testCrossingMaxStageCollectsBeastAndSpawnsFreshEgg() {
        val state = nearMax(freshState())
        val task = CramagotchiEngine.addTask(state, "Capstone", TaskWeight.MEAL, baseTime)
        // rng 0.5 → variation 1.0 → 25 XP → 300 → GRADUATED_BEAST.
        val done = CramagotchiEngine.completeTask(task, "task-1", baseTime, null, 0.5, 0.7)

        // The fully-grown monster is collected — roster complete (4 of 4).
        assertEquals(4, done.collection.size)
        assertEquals("GRADUATED_BEAST", done.collection.last().speciesId)

        // …and a brand-new monster is instantiated: fresh egg, zeroed XP.
        assertEquals(EvolutionStage.EGG, done.monster.stage)
        assertEquals(0, done.monster.xp)
        assertEquals(MonsterStatus.IDLE, done.monster.status)
        assertEquals(null, done.monster.eatingUntil)
        assertEquals(null, done.monster.sleepUntil)
        assertEquals(baseTime, done.monster.lastFedAt)
    }

    @Test
    fun testFreshEggHueIsDeterministicAndNew() {
        val state = nearMax(freshState(seedHueRng = 0.5)) // initial egg hue 180
        val task = CramagotchiEngine.addTask(state, "Capstone", TaskWeight.MEAL, baseTime)
        val done = CramagotchiEngine.completeTask(task, "task-1", baseTime, null, 0.5, 0.7)

        // rng 0.5 → variation 1.0; hueRng 0.7 + golden stir → hue 114.
        val expected = ((0.7 + 0.618034) % 1.0 * 360.0).toInt()
        assertEquals(expected, done.monster.hue)
        assertEquals(114, done.monster.hue)
        assertNotEquals(done.collection.first { it.speciesId == "EGG" }.hue, done.monster.hue)

        // The completed task stays in the journal — graduation only resets the monster.
        assertEquals(1, done.tasks.count { it.completed })
    }

    @Test
    fun testGraduationKeepsRosterWithoutDuplicatesOnNextCycle() {
        var state = nearMax(freshState())
        var task = CramagotchiEngine.addTask(state, "Cycle 1", TaskWeight.MEAL, baseTime)
        state = CramagotchiEngine.completeTask(task, "task-1", baseTime, null, 0.5, 0.7)
        assertEquals(4, state.collection.size)
        assertEquals(EvolutionStage.EGG, state.monster.stage)

        // Second cycle: one meal away again — same species thresholds re-crossed.
        val again = state.copy(monster = state.monster.copy(xp = 275, stage = EvolutionStage.EGG))
        task = CramagotchiEngine.addTask(again, "Cycle 2", TaskWeight.MEAL, baseTime)
        val done = CramagotchiEngine.completeTask(task, "task-2", baseTime, null, 0.5, 0.7)

        // Roster unchanged: 4 species, hues never re-rolled; monster re-graduated.
        assertEquals(4, done.collection.size)
        assertEquals(180, done.collection.first { it.speciesId == "EGG" }.hue)
        assertEquals(EvolutionStage.EGG, done.monster.stage)
        assertEquals(0, done.monster.xp)
        assertNotEquals(
            done.collection.first { it.speciesId == "EGG" }.hue,
            done.monster.hue
        )
    }

    @Test
    fun testFinishExamCrossingMaxAlsoGraduates() {
        val state = nearMax(freshState()).copy(
            exams = listOf(Exam("exam-1", null, "2024-01-01", ExamKind.DEADLINE))
        )
        // 7 days out → base 25 + bonus 35 = 60 XP → 335 → GRADUATED_BEAST.
        val done = CramagotchiEngine.finishExam(state, "exam-1", baseTime, 0.5)

        assertTrue(done.exams.isEmpty())
        assertEquals(4, done.collection.size)
        assertEquals("GRADUATED_BEAST", done.collection.last().speciesId)
        assertEquals(EvolutionStage.EGG, done.monster.stage)
        assertEquals(0, done.monster.xp)
    }

    @Test
    fun testSubMaxCrossingsNeverResetTheMonster() {
        val state = freshState().copy(monster = freshState().monster.copy(xp = 40))
        val task = CramagotchiEngine.addTask(state, "Snack run", TaskWeight.MEAL, baseTime)
        val done = CramagotchiEngine.completeTask(task, "task-1", baseTime, null, 0.5, 0.7)
        // 65 XP → HATCHLING, collected as before, monster NOT reset.
        assertEquals(EvolutionStage.HATCHLING, done.monster.stage)
        assertEquals(65, done.monster.xp)
    }

    // ── legacy-save reconciliation ───────────────────────────

    @Test
    fun testReconcileCollectionBackfillsReachedSpecies() {
        // Legacy shape: empty roster (pre-collection save), stage SCHOLAR.
        val legacy = freshState().copy(
            monster = freshState().monster.copy(xp = 160, stage = EvolutionStage.SCHOLAR),
            collection = emptyList()
        )
        val reconciled = CramagotchiEngine.reconcileCollection(legacy, 0.7)
        assertEquals(
            listOf("EGG", "HATCHLING", "SCHOLAR"),
            reconciled.collection.map { it.speciesId }
        )
        assertTrue(reconciled.collection.all { it.hue in 0..359 })
    }

    @Test
    fun testReconcilePreservesExistingHues() {
        val state = freshState(seedHueRng = 0.25).copy(
            monster = freshState().monster.copy(xp = 200, stage = EvolutionStage.SCHOLAR)
        )
        assertEquals(90, state.collection[0].hue) // floor(0.25 × 360)
        val reconciled = CramagotchiEngine.reconcileCollection(state, 0.7)
        assertEquals(90, reconciled.collection.first { it.speciesId == "EGG" }.hue)
    }

    @Test
    fun testReconcileBackfillsMissingMonsterHue() {
        // Legacy monster has no hue (null) — reconcile tints it from its
        // stage's roster entry so the active card matches the collection.
        val legacy = freshState().copy(
            monster = freshState().monster.copy(xp = 200, stage = EvolutionStage.SCHOLAR, hue = null),
            collection = emptyList()
        )
        val reconciled = CramagotchiEngine.reconcileCollection(legacy, 0.7)
        assertEquals(
            reconciled.collection.first { it.speciesId == "SCHOLAR" }.hue,
            reconciled.monster.hue
        )
    }

    @Test
    fun testReconcileIsNoOpWhenNothingToBackfill() {
        val state = freshState()
        assertEquals(state, CramagotchiEngine.reconcileCollection(state, 0.7))
    }

    // ── initial hue on the active monster ────────────────────

    @Test
    fun testInitialStateTintsTheActiveMonster() {
        val state = freshState(seedHueRng = 0.25)
        assertEquals(90, state.monster.hue) // same roll as the seeded roster EGG
    }

    // ── persistence ──────────────────────────────────────────

    @Test
    fun testMonsterHueSurvivesStorageRoundTrip() {
        val graduated = nearMax(freshState())
        val task = CramagotchiEngine.addTask(graduated, "Capstone", TaskWeight.MEAL, baseTime)
        val done = CramagotchiEngine.completeTask(task, "task-1", baseTime, null, 0.5, 0.7)
        val restored = StorageRepository.deserialize(StorageRepository.serialize(done))
        assertEquals(done.monster, restored?.monster)
        assertEquals(done.collection, restored?.collection)
    }
}
