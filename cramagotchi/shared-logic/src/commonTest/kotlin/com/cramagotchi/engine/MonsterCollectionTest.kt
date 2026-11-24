package com.cramagotchi.engine

import com.cramagotchi.model.*
import com.cramagotchi.storage.StorageRepository
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertTrue

/**
 * TDD suite for the collected-monsters gallery (user story: only fully
 * evolved monsters are collected, each keeping its unique hue through all
 * evolutions).
 *
 * Contract:
 *  - `createInitialState` starts with an EMPTY gallery; the active egg's
 *    permanent hue is rolled from the caller's `seedHueRng`
 *    (∈ [0,1) → hue ∈ [0,360)) and lives on MonsterState.
 *  - The hue sticks with the monster through every evolution (EGG → … →
 *    GRADUATED_BEAST); evolving never re-rolls it.
 *  - Only the max stage (GRADUATED_BEAST) enters the gallery: intermediate
 *    stage crossings collect nothing.
 *  - The gallery holds one entry per fully-raised monster — duplicates of
 *    the stage species accrue one entry each.
 *  - The gallery survives serialize → deserialize round-trips.
 */
class MonsterCollectionTest {

    private val baseTime = 1_700_000_000_000.0

    private fun freshState(seedHueRng: Double = 0.5): AppState =
        CramagotchiEngine.createInitialState("Munch", baseTime, seedHueRng)

    // ── starting state ───────────────────────────────────────

    @Test
    fun testInitialStateStartsWithEmptyGalleryAndTintedEgg() {
        val state = freshState(seedHueRng = 0.25)
        assertEquals(0, state.collection.size)
        assertEquals(EvolutionStage.EGG, state.monster.stage)
        assertEquals(90, state.monster.hue) // floor(0.25 × 360)
    }

    @Test
    fun testRolledHueStaysInRangeForExtremeSeeds() {
        assertEquals(0, freshState(seedHueRng = 0.0).monster.hue)
        assertEquals(359, freshState(seedHueRng = 0.999999).monster.hue)
        // out-of-range callers are coerced, never crash
        assertEquals(0, freshState(seedHueRng = -0.5).monster.hue)
        assertEquals(359, freshState(seedHueRng = 5.0).monster.hue)
    }

    // ── hue persistence through evolutions ───────────────────

    @Test
    fun testHueSticksThroughIntermediateEvolutions() {
        val state = freshState(seedHueRng = 0.5).copy(
            monster = freshState().monster.copy(xp = 60, hue = 180)
        )
        val task = CramagotchiEngine.addTask(state, "Meal", TaskWeight.MEAL, baseTime)
        val done = CramagotchiEngine.completeTask(task, "task-1", baseTime, null, 0.5, 0.7)
        assertEquals(EvolutionStage.HATCHLING, done.monster.stage)
        assertEquals(180, done.monster.hue) // never re-rolled while growing
    }

    // ── only fully evolved monsters collect ──────────────────

    @Test
    fun testIntermediateCrossingsNeverEnterTheGallery() {
        val state = freshState().copy(monster = freshState().monster.copy(xp = 40))
        val task = CramagotchiEngine.addTask(state, "Meal", TaskWeight.MEAL, baseTime)
        val done = CramagotchiEngine.completeTask(task, "task-1", baseTime, null, 0.5, 0.7)
        assertEquals(EvolutionStage.HATCHLING, done.monster.stage)
        assertEquals(0, done.collection.size)
    }

    @Test
    fun testStaleSaveJumpStraightToMaxCollectsOnlyTheGraduate() {
        // Legacy-save scenario: xp already says max territory but the stale
        // stage field says EGG. Completing a task re-evaluates the stage and
        // must collect just the fully-evolved monster (one entry), not the
        // intermediate stages.
        val state = freshState().copy(
            monster = freshState().monster.copy(xp = 295, hue = 180)
        )
        val task = CramagotchiEngine.addTask(state, "Capstone", TaskWeight.MEAL, baseTime)
        val done = CramagotchiEngine.completeTask(task, "task-1", baseTime, null, 0.5, 0.7)
        assertEquals(1, done.collection.size)
        assertEquals("GRADUATED_BEAST", done.collection[0].speciesId)
        assertEquals(180, done.collection[0].hue) // retired in its own colour
    }

    // ── pose roll ────────────────────────────────────────────

    @Test
    fun testRetiredPoseIsDeterministicAndValid() {
        val state = freshState().copy(monster = freshState().monster.copy(xp = 295, hue = 180))
        val task = CramagotchiEngine.addTask(state, "Capstone", TaskWeight.MEAL, baseTime)
        val done = CramagotchiEngine.completeTask(task, "task-1", baseTime, null, 0.5, 0.7)
        // pose = ((hueRng + POSE_STIR) % 1.0) < 0.5 → hueRng 0.7 → sleeping
        assertEquals(true, done.collection[0].sleeping)
    }

    // ── persistence ──────────────────────────────────────────

    @Test
    fun testGallerySurvivesStorageRoundTrip() {
        var state = freshState()
        val task = CramagotchiEngine.addTask(
            state.copy(monster = state.monster.copy(xp = 295)), "Capstone", TaskWeight.MEAL, baseTime
        )
        val done = CramagotchiEngine.completeTask(task, "task-1", baseTime, null, 0.5, 0.7)
        val restored = StorageRepository.deserialize(StorageRepository.serialize(done))
        assertEquals(done.collection, restored?.collection)
        assertEquals(done.monster, restored?.monster)
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
