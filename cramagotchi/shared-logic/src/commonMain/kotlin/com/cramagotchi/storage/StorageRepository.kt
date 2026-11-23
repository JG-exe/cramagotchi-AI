package com.cramagotchi.storage

import com.cramagotchi.model.AppState
import kotlin.js.JsExport

/**
 * Browser localStorage adapter for serialising/deserialising AppState.
 *
 * STUB: will be implemented after test review.
 */
@JsExport
object StorageRepository {

    private const val STORAGE_KEY = "cramagotchi_state"

    /** Serialize AppState to JSON string. */
    fun serialize(state: AppState): String {
        TODO("Implementation after test review")
    }

    /** Deserialize JSON string back to AppState. Returns null on invalid input. */
    fun deserialize(json: String): AppState? {
        TODO("Implementation after test review")
    }
}
