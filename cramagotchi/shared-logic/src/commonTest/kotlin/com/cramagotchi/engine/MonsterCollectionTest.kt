package com.cramagotchi.engine

import com.cramagotchi.model.*
import com.cramagotchi.storage.StorageRepository
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertTrue

/**
 * TDD suite for the collectible-monster roster (user story: collected
 * monsters with a random hue).
 *
 * Contract:
 *  - `createInitialState` seeds the roster with the EGG species; its hue is
 *    rolled from the caller's `seedHueRng` (∈ [0,1) → hue ∈ [0,360)).
 *  - `unlockCollectible(state, speciesId, now, hueRng)` appends the species
 *    exactly once with a rolled hue; a second unlock is a no-op — the first
 *    hue sticks forever (part of the save, never re-rolled).
 *  - Evolution unlocks: completing a task / finishing a deadline that lifts
 *    the stage auto-collects each newly reached stage species.
 *  - The roster survives serialize → deserialize round-trips.
 */
class MonsterCollectionTest {

    private val baseTime = 1_700_000_000_000.0

    private fun freshState(seedHueRng: Double = 0.5): AppState =
        CramagotchiEngine.createInitialState("Munch", baseTime, seedHueRng)

    // ── seeding & rolling ────────────────────────────────────

    @Test
    fun testInitialStateSeedsEggWithHueInRange() {
        val state = freshState(seedHueRng = 0.25)
        assertEquals(1, state.collection.size)
        assertEquals("EGG", state.collection[0].speciesId)
        assertEquals(90, state.collection[0].hue) // floor(0.25 × 360)
        assertTrue(state.collection[0].hue in 0..359)
    }

    @Test
    fun testRolledHueStaysInRangeForExtremeSeeds() {
        assertEquals(0, freshState(seedHueRng = 0.0).collection[0].hue)
        assertEquals(359, freshState(seedHueRng = 0.999999).collection[0].hue)
        // out-of-range callers are coerced, never crash
        assertEquals(0, freshState(seedHueRng = -0.5).collection[0].hue)
        assertEquals(359, freshState(seedHueRng = 5.0).collection[0].hue)
    }

    // ── unlockCollectible ────────────────────────────────────

    @Test
    fun testUnlockAddsSpeciesWithRolledHue() {
        val state = freshState()
        val unlocked = CramagotchiEngine.unlockCollectible(state, "HATCHLING", baseTime, 0.9)
        assertEquals(2, unlocked.collection.size)
        assertEquals("HATCHLING", unlocked.collection[1].speciesId)
        assertEquals(324, unlocked.collection[1].hue) // floor(0.9 × 360)
        assertEquals(baseTime, unlocked.collection[1].collectedAt)
    }

    @Test
    fun testUnlockNeverDuplicatesAndFirstHueSticks() {
        val state = freshState()
        val first = CramagotchiEngine.unlockCollectible(state, "SCHOLAR", baseTime, 0.2)
        val second = CramagotchiEngine.unlockCollectible(first, "SCHOLAR", baseTime + 1000.0, 0.8)
        assertEquals(first, second)
        assertEquals(1, second.collection.count { it.speciesId == "SCHOLAR" })
    }

    // ── evolution auto-unlocks ───────────────────────────────

    @Test
    fun testCrossingEvolutionThresholdCollectsTheStage() {
        val state = freshState()
        // Default rng 0.5 → variation 1.0 → a plain MEAL awards 25 XP → still EGG.
        val meal1 = CramagotchiEngine.addTask(state, "Chapter 11", TaskWeight.MEAL, baseTime)
        val afterSmall = CramagotchiEngine.completeTask(meal1, "task-1", baseTime, null, 0.5, 0.7)
        assertEquals(EvolutionStage.EGG, afterSmall.monster.stage)
        assertEquals(1, afterSmall.collection.size)

        // A second MEAL with the accuracy bonus: 25 × 1.0 × 1.5 = 38 → 63 total → HATCHLING.
        val meal2 = CramagotchiEngine.addTask(afterSmall, "Problem set", TaskWeight.MEAL, baseTime)
        val estimated = CramagotchiEngine.updateTask(meal2, "task-2", "Problem set", TaskWeight.MEAL, null, 40.0)
        val done = CramagotchiEngine.completeTask(estimated, "task-2", baseTime, 40.0, 0.5, 0.7)
        assertEquals(EvolutionStage.HATCHLING, done.monster.stage)
        assertEquals(2, done.collection.size)
        assertEquals("HATCHLING", done.collection[1].speciesId)
        assertTrue(done.collection[1].hue in 0..359)
    }

    @Test
    fun testTwoStageJumpCollectsBothStages() {
        val state = freshState()
        // Legacy-save scenario: xp already says SCHOLAR territory but the stale
        // stage field says EGG (no HATCHLING collected). Completing a task
        // re-evaluates the stage and must collect BOTH skipped species.
        val staleEgg = state.copy(
            monster = state.monster.copy(xp = 149, stage = EvolutionStage.EGG)
        )
        assertEquals(1, staleEgg.collection.size)
        val task = CramagotchiEngine.addTask(staleEgg, "Jump", TaskWeight.MEAL, baseTime)
        val done = CramagotchiEngine.completeTask(task, "task-1", baseTime, 40.0, 0.5, 0.7)
        assertEquals(EvolutionStage.SCHOLAR, done.monster.stage)
        assertEquals(3, done.collection.size)
        assertEquals("HATCHLING", done.collection[1].speciesId)
        assertEquals("SCHOLAR", done.collection[2].speciesId)
        assertTrue(done.collection[1].hue != done.collection[2].hue)
    }

    // ── persistence ──────────────────────────────────────────

    @Test
    fun testCollectionSurvivesStorageRoundTrip() {
        val state = CramagotchiEngine.unlockCollectible(freshState(), "SCHOLAR", baseTime, 0.42)
        val restored = StorageRepository.deserialize(StorageRepository.serialize(state))
        assertEquals(state.collection, restored?.collection)
    }

    @Test
    fun testLegacyPayloadWithoutCollectionDeserializesToEmpty() {
        // Pre-collection save shape — no `collection` field present.
        val legacy = """{"tasks":[],"monster":{"name":"Munch","xp":11,
            "stage":"HATCHLING","status":"IDLE","lastFedAt":1.7E12},"exams":[]}"""
        val restored = StorageRepository.deserialize(legacy)
        assertEquals(emptyList(), restored?.collection)
    }
}
