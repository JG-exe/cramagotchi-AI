package com.cramagotchi.engine

import com.cramagotchi.model.*
import com.cramagotchi.storage.StorageRepository
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertNotNull
import kotlin.test.assertNull
import kotlin.test.assertTrue

/**
 * TDD suite for the multi-exam portfolio (user story 1).
 *
 * Contract:
 *  - `addExam(state, subjectTag, dateIso, now)` appends an Exam with a unique id.
 *  - `removeExam(state, examId)` deletes by id, preserving the rest.
 *  - `nearestExamDays(state, now)` = whole calendar days (UTC) to the closest
 *    upcoming exam (examDay >= today) across `exams` AND the legacy
 *    `examDateIso` fallback; null when nothing is upcoming.
 *  - The legacy single `examDateIso` field keeps feeding the countdown after
 *    deserializing old localStorage payloads (migrated into `exams` on restore).
 *
 * Written FIRST — must be reviewed before implementation.
 */
class ExamPortfolioTest {

    private val baseTime = 1_700_000_000_000.0
    // 2026-12-01 12:00 UTC
    private val dec1 = 1_796_126_400_000.0

    private fun freshState(): AppState = CramagotchiEngine.createInitialState("Munch", baseTime)

    // ── Exam CRUD ────────────────────────────────────────────

    @Test
    fun testAddExamAppendsWithUniqueId() {
        val one = CramagotchiEngine.addExam(freshState(), "MATH", "2026-12-11", baseTime)
        assertEquals(1, one.exams.size)
        assertEquals("MATH", one.exams[0].subjectTag)
        assertEquals("2026-12-11", one.exams[0].dateIso)

        val two = CramagotchiEngine.addExam(one, "BIO", "2026-12-20", baseTime)
        assertEquals(2, two.exams.size)
        assertTrue(one.exams[0].id != two.exams[1].id, "Exam ids must be unique")
    }

    @Test
    fun testRemoveExamDeletesByIdAndPreservesOthers() {
        val state = CramagotchiEngine.addExam(
            CramagotchiEngine.addExam(freshState(), "MATH", "2026-12-11", baseTime),
            "BIO", "2026-12-20", baseTime
        )
        val removed = CramagotchiEngine.removeExam(state, state.exams[0].id)
        assertEquals(1, removed.exams.size)
        assertEquals("BIO", removed.exams[0].subjectTag)
    }

    // ── Nearest-upcoming countdown across exams ──────────────

    @Test
    fun testNearestExamDaysPicksClosestUpcomingExam() {
        val state = CramagotchiEngine.addExam(
            CramagotchiEngine.addExam(freshState(), "FAR", "2026-12-21", baseTime),
            "NEAR", "2026-12-04", dec1
        )
        // 2026-12-01 → 2026-12-04 = 3 days, closer than 2026-12-21 (20 days)
        assertEquals(3, CramagotchiEngine.nearestExamDays(state, dec1))
    }

    @Test
    fun testNearestExamDaysIgnoresPastExamsWhenFutureExists() {
        val state = CramagotchiEngine.addExam(
            CramagotchiEngine.addExam(freshState(), "PAST", "2026-11-28", baseTime),
            "NEXT", "2026-12-06", dec1
        )
        assertEquals(5, CramagotchiEngine.nearestExamDays(state, dec1))
    }

    @Test
    fun testNearestExamDaysIsZeroOnExamDayItself() {
        val state = CramagotchiEngine.addExam(freshState(), "TODAY", "2026-12-01", baseTime)
        assertEquals(0, CramagotchiEngine.nearestExamDays(state, dec1))
    }

    @Test
    fun testNearestExamDaysIsNullWhenNothingUpcoming() {
        assertEquals(null, CramagotchiEngine.nearestExamDays(freshState(), dec1))
        val allPast = CramagotchiEngine.addExam(freshState(), "OLD", "2026-11-01", baseTime)
        assertNull(CramagotchiEngine.nearestExamDays(allPast, dec1))
    }

    // ── Legacy single-exam field keeps working ───────────────

    @Test
    fun testLegacyExamDateFeedsNearestExamDays() {
        val legacy = freshState().copy(examDateIso = "2026-12-11")
        assertEquals(10, CramagotchiEngine.nearestExamDays(legacy, dec1))
        // Old deterministic countdown contract must remain intact too
        assertEquals(10, CramagotchiEngine.examCountdownDays(legacy, dec1))
    }

    @Test
    fun testLegacyExamDateCombinesWithExplicitExams() {
        val state = CramagotchiEngine.addExam(
            freshState().copy(examDateIso = "2026-12-11"),
            "SOONER", "2026-12-05", baseTime
        )
        assertEquals(4, CramagotchiEngine.nearestExamDays(state, dec1))
    }

    // ── Old storage payloads migrate on restore ──────────────

    @Test
    fun testLegacyLocalStoragePayloadMigratesIntoExamList() {
        val legacyJson = """
            {"tasks":[],"monster":{"name":"Munch","xp":0,"stage":"EGG",
             "status":"IDLE","lastFedAt":1700000000000},
             "examDateIso":"2026-12-11"}
        """.trimIndent()

        val restored = StorageRepository.deserialize(legacyJson)
        assertNotNull(restored, "Legacy payload must still deserialize")
        assertEquals(1, restored.exams.size, "Legacy examDateIso must migrate into exams on restore")
        assertEquals("2026-12-11", restored.exams[0].dateIso)
        assertNull(restored.exams[0].subjectTag, "The legacy exam had no subject tag")
    }

    @Test
    fun testNewStoragePayloadRoundTripsThroughExams() {
        val state = CramagotchiEngine.addExam(
            freshState().copy(examDateIso = null),
            "MATH", "2026-12-11", baseTime
        )
        val restored = StorageRepository.deserialize(StorageRepository.serialize(state))
        assertNotNull(restored)
        assertEquals(1, restored.exams.size)
        assertEquals("MATH", restored.exams[0].subjectTag)
    }

    // ── Deadline / exam kinds ────────────────────────────────

    @Test
    fun testAddExamDefaultsToDeadline() {
        val state = CramagotchiEngine.addExam(freshState(), "MATH", "2026-12-11", baseTime)
        assertEquals(ExamKind.DEADLINE, state.exams[0].kind, "Deadline must be the default kind")
    }

    @Test
    fun testAddExamCanCreateHighStakesExam() {
        val state = CramagotchiEngine.addExam(freshState(), "MATH", "2026-12-11", baseTime, ExamKind.EXAM)
        assertEquals(ExamKind.EXAM, state.exams[0].kind)
    }

    @Test
    fun testLegacyExamDateMigratesAsDeadline() {
        val legacyJson = """
            {"tasks":[],"monster":{"name":"Munch","xp":0,"stage":"EGG",
             "status":"IDLE","lastFedAt":1700000000000},
             "examDateIso":"2026-12-11"}
        """.trimIndent()
        val restored = StorageRepository.deserialize(legacyJson)
        assertNotNull(restored)
        assertEquals(ExamKind.DEADLINE, restored.exams[0].kind, "Pre-kind payloads are deadlines")
    }

    @Test
    fun testExamKindRoundTripsThroughStorage() {
        val state = CramagotchiEngine.addExam(freshState(), "MATH", "2026-12-11", baseTime, ExamKind.EXAM)
        val restored = StorageRepository.deserialize(StorageRepository.serialize(state))
        assertNotNull(restored)
        assertEquals(ExamKind.EXAM, restored.exams[0].kind)
    }

    // ── Nearest-upcoming item naming ─────────────────────────

    @Test
    fun testNearestUpcomingExamReturnsClosestEntry() {
        val state = CramagotchiEngine.addExam(
            CramagotchiEngine.addExam(freshState(), "FAR", "2026-12-21", baseTime, ExamKind.EXAM),
            "NEAR", "2026-12-04", dec1
        )
        val nearest = CramagotchiEngine.nearestUpcomingExam(state, dec1)
        assertNotNull(nearest)
        assertEquals("NEAR", nearest.subjectTag)
        assertEquals(ExamKind.DEADLINE, nearest.kind)
    }

    @Test
    fun testNearestUpcomingExamIsNullWhenNothingUpcoming() {
        val allPast = CramagotchiEngine.addExam(freshState(), "OLD", "2026-11-01", baseTime, ExamKind.EXAM)
        assertNull(CramagotchiEngine.nearestUpcomingExam(allPast, dec1))
    }
}
