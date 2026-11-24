package com.cramagotchi.engine

import com.cramagotchi.model.*
import com.cramagotchi.storage.StorageRepository
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertNotEquals
import kotlin.test.assertTrue

/**
 * TDD suite for graduation + legacy reconciliation (reworked gallery
 * contract): a fully-evolved monster retires into the gallery keeping its
 * unique hue and a random sleeping/idling pose, and a brand-new monster
 * spawns with its own never-again-changed hue.
 *
 * Contract:
 *  - Crossing into the max stage (GRADUATED_BEAST, 300 XP) via completeTask
 *    or finishExam appends exactly one gallery entry — the retired monster,
 *    in the hue it wore all its life — then spawns a FRESH monster: stage
 *    EGG, xp 0, status IDLE, timers cleared, new hue rolled from the
 *    caller's hueRng (golden-ratio stir, so the next creature is visibly
 *    different).
 *  - The current monster's hue is persisted, so reloading returns the same
 *    coloured creature it had before the reload.
 *  - `reconcileCollection(state, now, hueRng)` migrates legacy saves on
 *    load: species cards from the old roster model are dropped (only fully
 *    evolved monsters stay), a hue-less monster is minted a permanent hue,
 *    and a save stuck at the max stage graduates immediately.
 */
class GraduationTest {

    private val baseTime = 1_700_000_000_000.0

    private fun freshState(seedHueRng: Double = 0.5): AppState =
        CramagotchiEngine.createInitialState("Munch", baseTime, seedHueRng)

    /** Crop a state to "one meal away from max", whatever the roster says. */
    private fun nearMax(state: AppState): AppState = state.copy(
        monster = state.monster.copy(xp = 275, stage = EvolutionStage.EGG, hue = 180)
    )

    // ── graduation on task completion ────────────────────────

    @Test
    fun testFillingTheXpBarRetiresTheMonsterAndSpawnsAFreshEgg() {
        val state = nearMax(freshState())
        val task = CramagotchiEngine.addTask(state, "Capstone", TaskWeight.MEAL, baseTime)
        // rng 0.5 → variation 1.0 → 25 XP → 300 → XP bar full → GRADUATED_BEAST.
        val done = CramagotchiEngine.completeTask(task, "task-1", baseTime, null, 0.5, 0.7)

        // Exactly one retired monster, in the hue it wore all its life…
        assertEquals(1, done.collection.size)
        assertEquals("GRADUATED_BEAST", done.collection[0].speciesId)
        assertEquals(180, done.collection[0].hue)
        assertEquals(baseTime, done.collection[0].collectedAt)

        // …and a brand-new monster with its own fresh hue: EGG, XP 0, IDLE.
        assertEquals(EvolutionStage.EGG, done.monster.stage)
        assertEquals(0, done.monster.xp)
        assertEquals(MonsterStatus.IDLE, done.monster.status)
        assertEquals(null, done.monster.eatingUntil)
        assertEquals(null, done.monster.sleepUntil)
        assertEquals(baseTime, done.monster.lastFedAt)
        assertEquals(114, done.monster.hue) // (0.7 + golden stir) % 1 × 360

        // The completed task stays in the journal — graduation only resets the monster.
        assertEquals(1, done.tasks.count { it.completed })
    }

    @Test
    fun testNewHueIsDeterministicAndDiffersFromTheRetiredOne() {
        val state = nearMax(freshState(seedHueRng = 0.5)) // retired hue 180
        val task = CramagotchiEngine.addTask(state, "Capstone", TaskWeight.MEAL, baseTime)
        val done = CramagotchiEngine.completeTask(task, "task-1", baseTime, null, 0.5, 0.7)
        val expected = ((0.7 + 0.618034) % 1.0 * 360.0).toInt()
        assertEquals(expected, done.monster.hue)
        assertNotEquals(done.collection[0].hue, done.monster.hue)
    }

    @Test
    fun testEachCycleAddsExactlyOneRetiredMonster() {
        var state = nearMax(freshState())
        var task = CramagotchiEngine.addTask(state, "Cycle 1", TaskWeight.MEAL, baseTime)
        state = CramagotchiEngine.completeTask(task, "task-1", baseTime, null, 0.5, 0.7)
        assertEquals(1, state.collection.size)
        assertEquals(EvolutionStage.EGG, state.monster.stage)

        // Second cycle: one meal away again — the previous stays permanently.
        val again = state.copy(monster = state.monster.copy(xp = 275, stage = EvolutionStage.EGG))
        task = CramagotchiEngine.addTask(again, "Cycle 2", TaskWeight.MEAL, baseTime)
        val done = CramagotchiEngine.completeTask(task, "task-2", baseTime, null, 0.5, 0.7)

        assertEquals(2, done.collection.size)
        assertEquals(180, done.collection[0].hue) // first monster, permanent
        assertEquals(EvolutionStage.EGG, done.monster.stage)
        assertEquals(0, done.monster.xp)
    }

    @Test
    fun testRetiredMonsterPosesAreRolledPerCycle() {
        // Cycle 1 with hueRng 0.7 → pose sleeping; cycle 2 with hueRng 0.5 →
        // (0.5 + 0.414213) % 1.0 = 0.914213 ≥ 0.5 → idling.
        val one = nearMax(freshState())
        val state = one.copy(monster = one.monster.copy(xp = 295))
        var task = CramagotchiEngine.addTask(state, "Capstone", TaskWeight.MEAL, baseTime)
        var done = CramagotchiEngine.completeTask(task, "task-1", baseTime, null, 0.5, 0.7)
        assertTrue(done.collection[0].sleeping)
        // Cycle 2 rolls the pose from 0.5 → idling:
        val next = done.copy(monster = done.monster.copy(xp = 295))
        task = CramagotchiEngine.addTask(next, "Capstone II", TaskWeight.MEAL, baseTime)
        done = CramagotchiEngine.completeTask(task, "task-2", baseTime, null, 0.5, 0.5)
        assertEquals(false, done.collection[1].sleeping) // idling
    }

    @Test
    fun testSubMaxCrossingsNeverResetTheMonsterOrCollect() {
        val state = freshState().copy(monster = freshState().monster.copy(xp = 40, hue = 180))
        val task = CramagotchiEngine.addTask(state, "Snack run", TaskWeight.MEAL, baseTime)
        val done = CramagotchiEngine.completeTask(task, "task-1", baseTime, null, 0.5, 0.7)
        // 65 XP → HATCHLING, hue sticks, gallery untouched, no reset.
        assertEquals(EvolutionStage.HATCHLING, done.monster.stage)
        assertEquals(65, done.monster.xp)
        assertEquals(180, done.monster.hue)
        assertEquals(0, done.collection.size)
    }

    @Test
    fun testReloadReturnsTheSameColouredGrowingMonster() {
        val graduated = nearMax(freshState())
        val task = CramagotchiEngine.addTask(graduated, "Capstone", TaskWeight.MEAL, baseTime)
        val done = CramagotchiEngine.completeTask(task, "task-1", baseTime, null, 0.5, 0.7)
        // The fresh egg's hue persists — reload → same coloured creature.
        val restored = StorageRepository.deserialize(StorageRepository.serialize(done))
        assertEquals(done.monster.hue, restored?.monster?.hue)
        assertEquals(done.monster.stage, restored?.monster?.stage)
    }

    // ── legacy-save migration ────────────────────────────────

    @Test
    fun testMigrationDropsIntermediateSpeciesCards() {
        // Pre-2.2 roster model: one card per species, monster mid-growth.
        val legacy = freshState().copy(
            monster = freshState().monster.copy(xp = 200, stage = EvolutionStage.SCHOLAR, hue = 123),
            collection = listOf(
                CollectedMonster("EGG", 10, baseTime),
                CollectedMonster("HATCHLING", 20, baseTime),
                CollectedMonster("SCHOLAR", 30, baseTime)
            )
        )
        val migrated = CramagotchiEngine.reconcileCollection(legacy, baseTime, 0.7)
        // Only fully evolved monsters stay — the species cards are gone…
        assertEquals(emptyList(), migrated.collection)
        // …and the growing monster keeps growing with its hue untouched.
        assertEquals(EvolutionStage.SCHOLAR, migrated.monster.stage)
        assertEquals(123, migrated.monster.hue)
    }

    @Test
    fun testMigrationMintsAHueForHuelessMonsters() {
        val legacy = freshState().copy(
            monster = freshState().monster.copy(xp = 200, stage = EvolutionStage.SCHOLAR, hue = null),
            collection = emptyList()
        )
        val migrated = CramagotchiEngine.reconcileCollection(legacy, baseTime, 0.7)
        assertEquals(251, migrated.monster.hue) // floor(0.7 × 360 = 251.999…), then persisted forever
    }

    @Test
    fun testMigrationGraduatesALegacyMonsterStuckAtMax() {
        // Legacy save whose XP filled before graduation existed: monster sits
        // at GRADUATED_BEAST forever. On load it must retire into the gallery
        // and a fresh egg must spawn.
        val legacy = freshState().copy(
            monster = freshState().monster.copy(xp = 340, stage = EvolutionStage.GRADUATED_BEAST, hue = 77),
            collection = emptyList()
        )
        val migrated = CramagotchiEngine.reconcileCollection(legacy, baseTime, 0.7)
        assertEquals(1, migrated.collection.size)
        assertEquals("GRADUATED_BEAST", migrated.collection[0].speciesId)
        assertEquals(77, migrated.collection[0].hue) // retired in its own colour
        // …and the new monster starts from the top of the ladder.
        assertEquals(EvolutionStage.EGG, migrated.monster.stage)
        assertEquals(0, migrated.monster.xp)
        assertNotEquals(77, migrated.monster.hue)
    }

    @Test
    fun testMigrationNeverDuplicatesAnAlreadyRetiredCreature() {
        // A pre-2.2 roster whose species card for GRADUATED_BEAST carries the
        // same hue as the monster's own: retiring again must not add a twin.
        val legacy = freshState().copy(
            monster = freshState().monster.copy(xp = 340, stage = EvolutionStage.GRADUATED_BEAST, hue = 77),
            collection = listOf(CollectedMonster("GRADUATED_BEAST", 77, baseTime))
        )
        val migrated = CramagotchiEngine.reconcileCollection(legacy, baseTime, 0.7)
        assertEquals(1, migrated.collection.size)
        assertEquals(EvolutionStage.EGG, migrated.monster.stage)
    }

    @Test
    fun testMigrationIsNoOpOnAnAlreadyMigratedSave() {
        val state = freshState()
        assertEquals(state, CramagotchiEngine.reconcileCollection(state, baseTime, 0.7))
    }

    @Test
    fun testMigratedRetiredMonsterKeepsItsPoseAcrossReloads() {
        val legacy = freshState().copy(
            monster = freshState().monster.copy(xp = 340, stage = EvolutionStage.GRADUATED_BEAST, hue = 77),
            collection = emptyList()
        )
        val migrated = CramagotchiEngine.reconcileCollection(legacy, baseTime, 0.7)
        val restored = StorageRepository.deserialize(StorageRepository.serialize(migrated))
        assertEquals(migrated.collection, restored?.collection)
    }
}
