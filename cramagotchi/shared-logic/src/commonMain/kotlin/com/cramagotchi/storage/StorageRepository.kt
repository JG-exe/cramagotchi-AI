package com.cramagotchi.storage

import com.cramagotchi.model.AppState
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

    /** Deserialize JSON string back to AppState. Returns null on invalid input. */
    fun deserialize(jsonStr: String): AppState? {
        return try {
            json.decodeFromString(AppState.serializer(), jsonStr)
        } catch (_: Exception) {
            null
        }
    }
}
