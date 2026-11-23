package com.cramagotchi.storage

import com.cramagotchi.model.AppState
import com.cramagotchi.model.Exam
import kotlinx.serialization.json.Json
import com.cramagotchi.export.TsExport

/**
 * Browser localStorage adapter for serialising/deserialising AppState.
 */
@TsExport
object StorageRepository {

    /** Single source of truth for the persistence key across all app targets. */
    const val STORAGE_KEY = "cramagotchi_state"

    private val json = Json {
        ignoreUnknownKeys = true
        encodeDefaults = true
    }

    /** Serialize AppState to JSON string. */
    fun serialize(state: AppState): String {
        return json.encodeToString(AppState.serializer(), state)
    }

    /**
     * Deserialize JSON string back to AppState. Returns null on invalid input.
     *
     * Migration: payloads saved before the multi-exam feature carry only the
     * legacy `examDateIso` field. Those are converted into a single entry in
     * `exams` so the exam portfolio sees them; the legacy field is left in
     * place for `examCountdownDays` backward compatibility.
     */
    fun deserialize(jsonStr: String): AppState? {
        val decoded = try {
            json.decodeFromString(AppState.serializer(), jsonStr)
        } catch (_: Exception) {
            return null
        }
        if (decoded.exams.isEmpty() && decoded.examDateIso != null) {
            return decoded.copy(exams = listOf(Exam(id = "exam-1", subjectTag = null, dateIso = decoded.examDateIso)))
        }
        return decoded
    }
}
