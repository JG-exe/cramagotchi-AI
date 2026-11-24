package com.cramagotchi.engine

import com.cramagotchi.model.*
import com.cramagotchi.export.TsExport
import kotlin.math.roundToInt

/**
 * Pure, deterministic state machine for Cramagotchi.
 * All methods are side-effect-free and return new state.
 */
@TsExport
object CramagotchiEngine {

    private const val ID_PREFIX = "task-"
    private const val EXAM_ID_PREFIX = "exam-"

    /** Golden-ratio stir for the graduation hue roll — decorrelated from the roster rolls. */
    private const val GOLDEN_STIR = 0.618034

    /** √2−1 stir for the retired monster's pose roll — decorrelated from both hue rolls. */
    private const val POSE_STIR = 0.414213

    /**
     * Derive the next task ID from the highest existing numeric suffix.
     * Keeps IDs collision-free even after a state restore from storage,
     * where an in-memory counter would restart at 0.
     */
    private fun nextId(state: AppState): String {
        val highest = state.tasks
            .mapNotNull { it.id.removePrefix(ID_PREFIX).toIntOrNull() }
            .maxOrNull() ?: 0
        return ID_PREFIX + (highest + 1)
    }

    /** Same collision-free scheme as [nextId], for exam IDs. */
    private fun nextExamId(state: AppState): String {
        val highest = state.exams
            .mapNotNull { it.id.removePrefix(EXAM_ID_PREFIX).toIntOrNull() }
            .maxOrNull() ?: 0
        return EXAM_ID_PREFIX + (highest + 1)
    }

    /**
     * Create a fresh AppState: empty gallery, active egg with its permanent
     * hue rolled from `seedHueRng` (sticks with the monster through every
     * evolution).
     */
    fun createInitialState(monsterName: String, now: Double, seedHueRng: Double = 0.5): AppState {
        return AppState(
            tasks = emptyArray(),
            monster = MonsterState(
                name = monsterName,
                xp = 0,
                stage = EvolutionStage.EGG,
                status = MonsterStatus.IDLE,
                lastFedAt = now,
                hue = hueFrom(seedHueRng)
            ),
            collection = emptyList()
        )
    }

    /** Add a new uncompleted task to the state, with an optional time estimate. */
    fun addTask(
        state: AppState,
        title: String,
        weight: TaskWeight,
        now: Double,
        subjectTag: String? = null,
        estimatedMinutes: Double? = null
    ): AppState {
        val newTask = StudyTask(
            id = nextId(state),
            title = title,
            subjectTag = subjectTag,
            weight = weight,
            completed = false,
            createdAt = now,
            completedAt = null,
            estimatedMinutes = estimatedMinutes
        )
        return state.copy(
            tasks = state.tasks + newTask
        )
    }

    /**
     * Edit an uncompleted task in place: replaces the title, subject tag,
     * weight and time estimate. Completed tasks are immutable (their awarded
     * XP and history must stay consistent), so the call is a no-op for them.
     * A blank/trimmed-empty title keeps the previous value — the engine
     * never corrupts the task. A null or non-positive estimate clears the
     * estimate (the caller sends the complete edit form, so null means
     * "no estimate", never "leave old value").
     */
    fun updateTask(
        state: AppState,
        taskId: String,
        title: String,
        weight: TaskWeight,
        subjectTag: String? = null,
        estimatedMinutes: Double? = null
    ): AppState {
        val taskIndex = state.tasks.indexOfFirst { it.id == taskId }
        if (taskIndex == -1) return state
        val task = state.tasks[taskIndex]
        if (task.completed) return state

        val trimmedTitle = title.trim().takeIf { it.isNotEmpty() } ?: task.title
        val safeEstimate = estimatedMinutes?.takeIf { it > 0 }
        val cleanTag = subjectTag?.trim()?.takeIf { it.isNotEmpty() }

        val updatedTasks = state.tasks.copyOf()
        updatedTasks[taskIndex] = task.copy(
            title = trimmedTitle,
            weight = weight,
            subjectTag = cleanTag,
            estimatedMinutes = safeEstimate
        )
        return state.copy(tasks = updatedTasks)
    }

    /**
     * Mark a task as completed: award XP, feed the monster, start eat/sleep cycle.
     *
     * XP = round(base × timeVariation × accuracyBonus):
     *  - base = task weight's xpValue;
     *  - timeVariation = 0.85 + 0.30 × rng (rng ∈ [0,1], supplied by the caller
     *    so this pure engine stays deterministic under test — a slight
     *    variability gamifies the reward);
     *  - accuracyBonus = 1.5 when the user supplied an estimate AND actual
     *    minutes with |actual − estimate| ≤ 25% of the estimate, else 1.0.
     * A wrong estimate is never punished (no penalty below the variation
     * floor). The actual amount is written to `awardedXp` — the UI must not
     * reveal it before completion.
     */
    fun completeTask(
        state: AppState,
        taskId: String,
        now: Double,
        actualMinutes: Double? = null,
        rng: Double = 0.5,
        hueRng: Double = 0.5
    ): AppState {
        val taskIndex = state.tasks.indexOfFirst { it.id == taskId }
        if (taskIndex == -1) return state

        val task = state.tasks[taskIndex]
        if (task.completed) return state

        // Gamified XP: slight variability + estimation-accuracy bonus.
        val variation = 0.85 + 0.30 * rng.coerceIn(0.0, 1.0)
        val estimate = task.estimatedMinutes
        val accuracyBonus =
            if (estimate != null && actualMinutes != null &&
                kotlin.math.abs(actualMinutes - estimate) <= 0.25 * estimate
            ) 1.5 else 1.0
        val awardedXp = (task.weight.xpValue * variation * accuracyBonus).roundToInt()

        // Mark the task as completed
        val updatedTasks = state.tasks.copyOf()
        updatedTasks[taskIndex] = task.copy(
            completed = true,
            completedAt = now,
            awardedXp = awardedXp
        )

        // Award XP
        val newXp = state.monster.xp + awardedXp
        val newStage = calculateEvolution(newXp)

        var next = state.copy(
            tasks = updatedTasks,
            monster = feedMonster(state.monster, newXp, newStage, now)
        )
        return graduateIfNeeded(next, now, hueRng)
    }

    /**
     * The feeding side-effect of every XP award: a SLEEPING monster quietly
     * banks the XP (anti-distraction lock — the sleep timer is untouched),
     * anything else starts the 3 s EATING → 25 min SLEEPING cycle.
     */
    private fun feedMonster(
        monster: MonsterState,
        newXp: Int,
        newStage: EvolutionStage,
        now: Double
    ): MonsterState {
        return if (monster.status == MonsterStatus.SLEEPING) {
            monster.copy(xp = newXp, stage = newStage, lastFedAt = now)
        } else {
            monster.copy(
                xp = newXp,
                stage = newStage,
                status = MonsterStatus.EATING,
                lastFedAt = now,
                eatingUntil = now + 3_000.0,
                sleepUntil = now + 1_503_000.0
            )
        }
    }

    /** Delete a task by ID (any task — active or devoured). */
    fun deleteTask(state: AppState, taskId: String): AppState {
        return state.copy(
            tasks = state.tasks.filter { it.id != taskId }.toTypedArray()
        )
    }

    /** Evaluate elapsed time: transition EATING→SLEEPING→IDLE, check 24h hunger. */
    fun evaluateTime(state: AppState, now: Double): AppState {
        val monster = state.monster
        var newStatus = monster.status
        var newEatingUntil = monster.eatingUntil
        var newSleepUntil = monster.sleepUntil

        // Resolve EATING → SLEEPING transition
        if (newStatus == MonsterStatus.EATING) {
            val eatingEnd = monster.eatingUntil
            if (eatingEnd != null && now > eatingEnd) {
                newStatus = MonsterStatus.SLEEPING
                newEatingUntil = null
            }
        }

        // Resolve SLEEPING → IDLE transition
        if (newStatus == MonsterStatus.SLEEPING) {
            val sleepEnd = monster.sleepUntil
            if (sleepEnd != null && now > sleepEnd) {
                newStatus = MonsterStatus.IDLE
                newSleepUntil = null
            }
        }

        // Check 24h hunger (only if IDLE — not eating or sleeping)
        if (newStatus == MonsterStatus.IDLE) {
            if (now - monster.lastFedAt > 86_400_000.0) {
                newStatus = MonsterStatus.HUNGRY
            }
        }

        return state.copy(
            monster = monster.copy(
                status = newStatus,
                eatingUntil = newEatingUntil,
                sleepUntil = newSleepUntil
            )
        )
    }

    /** Calculate the correct EvolutionStage for a given XP total. */
    fun calculateEvolution(xp: Int): EvolutionStage {
        return when {
            xp >= 300 -> EvolutionStage.GRADUATED_BEAST
            xp >= 150 -> EvolutionStage.SCHOLAR
            xp >= 50 -> EvolutionStage.HATCHLING
            else -> EvolutionStage.EGG
        }
    }

    /**
     * Days remaining until the exam (agents.md §5 Should Have), computed by
     * the KMP engine so every platform shares one implementation.
     *
     * The countdown is a whole-calendar-day difference in UTC — independent
     * of the caller's local timezone and of the time-of-day inside `now` —
     * so the same state always evaluates identically on JS, desktop and
     * Android. Returns null when no exam date is set, 0 on the exam day
     * itself, and a negative value once the exam day has passed.
     *
     * Legacy single-date contract: reads only `state.examDateIso`. For the
     * multi-exam portfolio use [nearestExamDays].
     *
     * `examDateIso` must be `YYYY-MM-DD` (as produced by `<input type="date">`).
     */
    fun examCountdownDays(state: AppState, now: Double): Int? {
        val iso = state.examDateIso ?: return null
        val examDay = isoDaysFromCivil(iso) ?: return null
        val todayDay = kotlin.math.floor(now / MILLIS_PER_DAY)
        return (examDay - todayDay).toInt()
    }

    /**
     * Days until the nearest UPCOMING exam across the exam portfolio (and
     * the legacy `examDateIso` fallback), in whole UTC calendar days —
     * 0 on the exam day itself. Past exams are ignored when any future one
     * exists; returns null when nothing is upcoming.
     */
    fun nearestExamDays(state: AppState, now: Double): Int? {
        val todayDay = kotlin.math.floor(now / MILLIS_PER_DAY)
        val dates = state.exams.map { it.dateIso } + listOfNotNull(state.examDateIso)
        return dates
            .mapNotNull { iso -> isoDaysFromCivil(iso)?.let { (it - todayDay).toInt() } }
            .filter { it >= 0 }
            .minOrNull()
    }

    /**
     * The nearest UPCOMING exam/deadline entry (examDay >= today), or null
     * when nothing is upcoming. Ties resolve to the earliest-added entry,
     * matching the "nearest days" count of [nearestExamDays]. Used by the
     * UI so the countdown can name the right item (exam vs deadline).
     */
    fun nearestUpcomingExam(state: AppState, now: Double): Exam? {
        val todayDay = kotlin.math.floor(now / MILLIS_PER_DAY)
        return state.exams
            .mapNotNull { exam ->
                isoDaysFromCivil(exam.dateIso)
                    ?.let { (it - todayDay).toInt() }
                    ?.takeIf { it >= 0 }
                    ?.let { exam to it }
            }
            .minByOrNull { (_, days) -> days }
            ?.first
    }

    /** Add an exam or deadline to the portfolio, with a unique id. Deadlines are the default kind. */
    fun addExam(
        state: AppState,
        subjectTag: String?,
        dateIso: String,
        now: Double,
        kind: ExamKind = ExamKind.DEADLINE
    ): AppState {
        val exam = Exam(
            id = nextExamId(state),
            subjectTag = subjectTag?.trim()?.takeIf { it.isNotEmpty() },
            dateIso = dateIso,
            kind = kind
        )
        return state.copy(exams = state.exams + exam)
    }

    /** Remove an exam from the portfolio by id; the remaining exams keep their data. */
    fun removeExam(state: AppState, examId: String): AppState {
        return state.copy(exams = state.exams.filter { it.id != examId })
    }

    /**
     * Edit an existing exam/deadline in place: subject tag, date and kind.
     * Unknown ids are a no-op. A blank subject clears it; the date is
     * stored verbatim (the UI validates the `YYYY-MM-DD` shape, and the
     * countdown already tolerates an unparseable date by skipping it).
     */
    fun updateExam(
        state: AppState,
        examId: String,
        subjectTag: String?,
        dateIso: String,
        kind: ExamKind = ExamKind.DEADLINE
    ): AppState {
        val index = state.exams.indexOfFirst { it.id == examId }
        if (index == -1) return state
        val updated = state.exams.toMutableList()
        updated[index] = updated[index].copy(
            subjectTag = subjectTag?.trim()?.takeIf { it.isNotEmpty() },
            dateIso = dateIso,
            kind = kind
        )
        return state.copy(exams = updated)
    }

    /* ── Early-finish XP & the collectible roster ─────────────── */

    /** Base XP for finishing a deadline/exam (a MEAL-sized study milestone). */
    const val BASE_FINISH_XP = 25

    /**
     * Total XP for finishing a dated item, tiered by the whole days still
     * remaining until its date (today-relative, same countdown basis as
     * [nearestExamDays]). The earlier the finish, the bigger the bonus;
     * on/after the due day there is no bonus (zero punishment — never a
     * penalty), just the base reward.
     */
    fun earlyFinishXp(daysRemaining: Int): Int {
        val bonus = when {
            daysRemaining <= 0 -> 0
            daysRemaining <= 2 -> 10
            daysRemaining <= 6 -> 20
            else -> 35
        }
        return BASE_FINISH_XP + bonus
    }

    /**
     * The "I'm done with this" chip action — **deadline only**: EXAM entries
     * can never be finished in advance (the exam day itself is the
     * milestone; finishing one is a no-op). For deadlines this removes the
     * entry from the portfolio (like [removeExam]) and feeds the monster
     * the awarded XP, with the early-finish bonus from [earlyFinishXp].
     * Unknown ids are a no-op. Unparsable dates award the base amount —
     * never a crash or a punishment. An evolution crossed while finishing
     * unlocks the species.
     */
    fun finishExam(
        state: AppState,
        examId: String,
        now: Double,
        hueRng: Double = 0.5
    ): AppState {
        val exam = state.exams.firstOrNull { it.id == examId } ?: return state
        if (exam.kind == ExamKind.EXAM) return state
        val todayDay = kotlin.math.floor(now / MILLIS_PER_DAY)
        val daysRemaining = isoDaysFromCivil(exam.dateIso)
            ?.let { (it - todayDay).toInt() }
            ?: 0
        val newXp = state.monster.xp + earlyFinishXp(daysRemaining)
        val newStage = calculateEvolution(newXp)

        val next = state.copy(
            exams = state.exams.filter { it.id != examId },
            monster = feedMonster(state.monster, newXp, newStage, now)
        )
        return graduateIfNeeded(next, now, hueRng)
    }

    /** Map an rng double to a hue, coerced into [0, 359] (overflow callers can't crash it). */
    private fun hueFrom(rng: Double): Int {
        val unit = rng.coerceIn(0.0, 0.999999)
        return (unit * 360.0).toInt()
    }

    /**
     * Graduation: when the XP bar fills completely (max stage reached), two
     * things happen at once. The fully-evolved monster retires into the
     * gallery — keeping the unique hue it wore through every evolution and
     * freezing an ambient pose (sleeping or idling, rolled from the caller's
     * rng at collection) — and a brand-new monster is instantiated: fresh
     * EGG, xp reset to 0, IDLE with cleared timers, and a NEW random hue
     * (golden-ratio stir) that will stick with it through its own
     * evolutions. Sub-max stages return the state unchanged — intermediate
     * stages never enter the gallery.
     */
    private fun graduateIfNeeded(state: AppState, now: Double, hueRng: Double): AppState {
        if (state.monster.stage != EvolutionStage.GRADUATED_BEAST) return state
        val retiredHue = state.monster.hue ?: hueFrom((hueRng + 0.375) % 1.0)
        val entry = CollectedMonster(
            speciesId = EvolutionStage.GRADUATED_BEAST.name,
            hue = retiredHue,
            collectedAt = now,
            sleeping = ((hueRng + POSE_STIR) % 1.0) < 0.5
        )
        // Defensive dedupe: a legacy roster may already hold the same creature.
        val alreadyRetired =
            state.collection.any { it.speciesId == entry.speciesId && it.hue == retiredHue }
        return state.copy(
            collection = if (alreadyRetired) state.collection else state.collection + entry,
            monster = state.monster.copy(
                xp = 0,
                stage = EvolutionStage.EGG,
                status = MonsterStatus.IDLE,
                lastFedAt = now,
                eatingUntil = null,
                sleepUntil = null,
                hue = hueFrom((hueRng + GOLDEN_STIR) % 1.0)
            )
        )
    }

    /**
     * Legacy-save reconciliation. Call once right after loading a save;
     * an already-migrated save passes through unchanged.
     * 1. Only fully-evolved monsters stay in the gallery — species cards
     *    written by the pre-2.2 roster model are dropped.
     * 2. A hue-less active monster (pre-hue save) is minted a permanent hue
     *    from the caller's rng, so its colour is consistent from then on.
     * 3. A save stuck at the max stage (XP filled before graduation
     *    existed) graduates on load: the creature retires into the gallery
     *    and a fresh egg spawns.
     */
    fun reconcileCollection(state: AppState, now: Double, hueRng: Double = 0.5): AppState {
        val filtered = state.copy(
            collection = state.collection.filter {
                it.speciesId == EvolutionStage.GRADUATED_BEAST.name
            }
        )
        val tinted = if (filtered.monster.hue == null)
            filtered.copy(monster = filtered.monster.copy(hue = hueFrom(hueRng)))
        else filtered
        return graduateIfNeeded(tinted, now, hueRng)
    }

    private const val MILLIS_PER_DAY = 86_400_000.0

    /**
     * Parse a `YYYY-MM-DD` string into a day count since the Unix epoch
     * (days from civil date algorithm — valid for the proleptic Gregorian
     * calendar, no fractional or DST adjustments).
     */
    private fun isoDaysFromCivil(iso: String): Double? {
        val parts = iso.split('-')
        if (parts.size != 3) return null
        val year = parts[0].toIntOrNull() ?: return null
        val month = parts[1].toIntOrNull() ?: return null
        val day = parts[2].toIntOrNull() ?: return null
        if (month !in 1..12 || day !in 1..31) return null

        val y = if (month <= 2) year - 1 else year
        val era = kotlin.math.floor(y / 400.0)
        val yoe = y - era * 400                                  // [0, 399]
        val mp = (month + 9) % 12                                // [0, 11]
        val doy = kotlin.math.floor((153 * mp + 2) / 5.0) + day - 1     // [0, 365]
        val doe = yoe * 365 + kotlin.math.floor(yoe / 4.0) - kotlin.math.floor(yoe / 100.0) + doy // [0, 146096]
        return era * 146_097 + doe - 719_468
    }
}
