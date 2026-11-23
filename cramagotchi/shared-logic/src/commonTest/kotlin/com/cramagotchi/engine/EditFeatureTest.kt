package com.cramagotchi.engine

import com.cramagotchi.model.*
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertSame

/**
 * TDD suite for the edit feature: active tasks and exams/deadlines can be
 * edited; completed tasks are immutable.
 *
 * Contract:
 *  - `updateTask(state, taskId, …)` replaces title/weight/subject/estimate
 *    for an UNcompleted task; unknown id or completed task → unchanged state.
 *  - A blank title or non-positive estimate never corrupts the task.
 *  - `updateExam(state, examId, …)` replaces subject/date/kind; unknown id
 *    → unchanged state; subject is trimmed / cleared when blank.
 */
class EditFeatureTest {

    private val baseTime = 1_700_000_000_000.0

    private fun freshState(): AppState = CramagotchiEngine.createInitialState("Munch", baseTime)

    // ── Task editing ─────────────────────────────────────────

    @Test
    fun testUpdateTaskReplacesEditableFields() {
        val withTask = CramagotchiEngine.addTask(
            freshState(), "Old title", TaskWeight.SNACK, baseTime,
            subjectTag = "Old subject", estimatedMinutes = 30.0
        )
        val edited = CramagotchiEngine.updateTask(
            withTask, withTask.tasks[0].id,
            "  New title  ", TaskWeight.MEAL, "New subject", 45.0
        )

        assertEquals(1, edited.tasks.size)
        val task = edited.tasks[0]
        assertEquals("New title", task.title, "Title must be trimmed")
        assertEquals(TaskWeight.MEAL, task.weight)
        assertEquals("New subject", task.subjectTag)
        assertEquals(45.0, task.estimatedMinutes)
        assertEquals(withTask.tasks[0].id, task.id, "Id must stay stable")
        assertEquals(withTask.tasks[0].createdAt, task.createdAt, "createdAt must stay stable")
    }

    @Test
    fun testUpdateTaskRejectsBlankTitleByKeepingPrevious() {
        val withTask = CramagotchiEngine.addTask(freshState(), "Real title", TaskWeight.SNACK, baseTime)
        val edited = CramagotchiEngine.updateTask(withTask, withTask.tasks[0].id, "   ", TaskWeight.MEAL)
        assertEquals("Real title", edited.tasks[0].title, "Blank edit must not erase the title")
    }

    @Test
    fun testUpdateTaskClearsNonPositiveEstimate() {
        val withTask = CramagotchiEngine.addTask(
            freshState(), "T", TaskWeight.SNACK, baseTime, estimatedMinutes = 30.0
        )
        val edited = CramagotchiEngine.updateTask(
            withTask, withTask.tasks[0].id, "T", TaskWeight.SNACK, null, 0.0
        )
        assertEquals(null, edited.tasks[0].estimatedMinutes, "Non-positive estimate must clear, not corrupt")
    }

    @Test
    fun testUpdateTaskCanClearEstimate() {
        val withTask = CramagotchiEngine.addTask(
            freshState(), "T", TaskWeight.SNACK, baseTime, estimatedMinutes = 30.0
        )
        val edited = CramagotchiEngine.updateTask(
            withTask, withTask.tasks[0].id, "T", TaskWeight.SNACK, null, null
        )
        assertEquals(null, edited.tasks[0].estimatedMinutes)
    }

    @Test
    fun testUpdateTaskCanClearSubjectTag() {
        val withTask = CramagotchiEngine.addTask(
            freshState(), "T", TaskWeight.SNACK, baseTime, subjectTag = "BIO"
        )
        val edited = CramagotchiEngine.updateTask(withTask, withTask.tasks[0].id, "T", TaskWeight.SNACK, "  ")
        assertEquals(null, edited.tasks[0].subjectTag, "Blank subject must clear the tag")
    }

    @Test
    fun testUpdateTaskIsNoOpForCompletedTask() {
        val withTask = CramagotchiEngine.addTask(freshState(), "Done deal", TaskWeight.SNACK, baseTime)
        val completed = CramagotchiEngine.completeTask(withTask, withTask.tasks[0].id, baseTime + 1000)
        val before = completed.tasks[0]

        val edited = CramagotchiEngine.updateTask(
            completed, before.id, "Rewritten!", TaskWeight.MEAL, "Hacked", 99.0
        )

        assertEquals(before, edited.tasks[0], "Completed tasks must stay immutable")
    }

    @Test
    fun testUpdateTaskIsNoOpForUnknownId() {
        val state = CramagotchiEngine.addTask(freshState(), "Keep me", TaskWeight.SNACK, baseTime)
        assertSame(state, CramagotchiEngine.updateTask(state, "task-999", "X", TaskWeight.MEAL))
    }

    // ── Exam / deadline editing ──────────────────────────────

    @Test
    fun testUpdateExamReplacesSubjectDateAndKind() {
        val withExam = CramagotchiEngine.addExam(freshState(), "MATH", "2026-12-11", baseTime)
        val edited = CramagotchiEngine.updateExam(
            withExam, withExam.exams[0].id, "  MATH 101  ", "2026-12-18", ExamKind.EXAM
        )

        val exam = edited.exams[0]
        assertEquals("MATH 101", exam.subjectTag, "Subject must be trimmed")
        assertEquals("2026-12-18", exam.dateIso)
        assertEquals(ExamKind.EXAM, exam.kind, "Toggle to high-stakes EXAM must persist")
        assertEquals(withExam.exams[0].id, exam.id, "Id must stay stable")
    }

    @Test
    fun testUpdateExamCanDemoteBackToDeadline() {
        val withExam = CramagotchiEngine.addExam(freshState(), "MATH", "2026-12-11", baseTime, ExamKind.EXAM)
        val edited = CramagotchiEngine.updateExam(withExam, withExam.exams[0].id, "MATH", "2026-12-12", ExamKind.DEADLINE)
        assertEquals(ExamKind.DEADLINE, edited.exams[0].kind)
    }

    @Test
    fun testUpdateExamCanClearSubject() {
        val withExam = CramagotchiEngine.addExam(freshState(), "MATH", "2026-12-11", baseTime)
        val edited = CramagotchiEngine.updateExam(withExam, withExam.exams[0].id, "  ", "2026-12-11", ExamKind.EXAM)
        assertEquals(null, edited.exams[0].subjectTag)
    }

    @Test
    fun testUpdateExamIsNoOpForUnknownId() {
        val withExam = CramagotchiEngine.addExam(freshState(), "MATH", "2026-12-11", baseTime)
        assertSame(withExam, CramagotchiEngine.updateExam(withExam, "exam-999", "X", "2027-01-01", ExamKind.EXAM))
    }

    @Test
    fun testEditedExamStillDrivesCountdown() {
        // 2026-12-01 12:00 UTC
        val dec1 = 1_796_126_400_000.0
        val withExam = CramagotchiEngine.addExam(freshState(), "MATH", "2026-12-11", baseTime)
        val edited = CramagotchiEngine.updateExam(withExam, withExam.exams[0].id, "MATH", "2026-12-05", ExamKind.DEADLINE)
        assertEquals(4, CramagotchiEngine.nearestExamDays(edited, dec1))
    }
}
