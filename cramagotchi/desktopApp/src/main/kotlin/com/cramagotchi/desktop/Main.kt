package com.cramagotchi.desktop

import com.cramagotchi.engine.CramagotchiEngine
import com.cramagotchi.model.AppState
import com.cramagotchi.model.TaskWeight
import javafx.application.Application
import javafx.scene.Scene
import javafx.scene.web.WebView
import javafx.stage.Stage
import java.io.File
import java.util.logging.Logger

/**
 * Desktop application shell for Cramagotchi.
 *
 * Shares the exact same frontend as the browser and Android versions by
 * loading the shared Angular bundle (bundled into classpath resources at
 * build time by the :desktopApp:bundleWebApp Gradle task). Set
 * CRAMAGOTCHI_DEV_SERVER_URL to load the ng serve dev server instead.
 *
 * All business logic runs through the shared-logic KMP engine, which the
 * Angular bundle itself consumes in its compiled JS form.
 */
class CramagotchiDesktopLauncher {

    fun initialize(name: String, now: Double): AppState {
        return CramagotchiEngine.createInitialState(name, now)
    }

    fun addTask(state: AppState, title: String, weight: TaskWeight, now: Double): AppState {
        return CramagotchiEngine.addTask(state, title, weight, now)
    }

    fun completeTask(state: AppState, taskId: String, now: Double): AppState {
        return CramagotchiEngine.completeTask(state, taskId, now)
    }

    fun evaluateTime(state: AppState, now: Double): AppState {
        return CramagotchiEngine.evaluateTime(state, now)
    }
}

class CramagotchiDesktopApp : Application() {

    private var webAppServer: EmbeddedWebAppServer? = null

    override fun start(stage: Stage) {
        val startUrl = System.getenv("CRAMAGOTCHI_DEV_SERVER_URL")
            ?: run {
                webAppServer = EmbeddedWebAppServer.start()
                "http://127.0.0.1:${webAppServer!!.port}/"
            }

        val webView = WebView().apply {
            // Persistent WebView profile: without it, JavaFX (< 23) kept DOM
            // storage (all Cramagotchi saves live in localStorage) in memory
            // only. Must be set before the engine loads any content.
            engine.userDataDirectory = resolveUserDataDirectory()
            engine.load(startUrl)
        }

        stage.title = "Cramagotchi Desktop Companion"
        stage.scene = Scene(webView, 1100.0, 800.0)
        stage.show()
    }

    override fun stop() {
        webAppServer?.stop()
    }

    /**
     * Per-user directory for the WebView profile (localStorage, IndexedDB…).
     *
     * Location: `%APPDATA%\Cramagotchi\webview` on Windows (the primary
     * desktop target), `~/.cramagotchi/webview` elsewhere (macOS/Linux).
     * The directory is created on demand; when creation fails — e.g. a
     * read-only home — this returns null so the engine falls back to the
     * previous session-only behaviour instead of crashing at startup.
     */
    private fun resolveUserDataDirectory(): File? {
        val base = System.getenv("APPDATA")?.takeIf { it.isNotBlank() }
            ?: System.getProperty("user.home")
        return try {
            File(base, "Cramagotchi${File.separator}webview")
                .apply { mkdirs() }
                .takeIf { it.isDirectory && it.canWrite() }
        } catch (e: Exception) {
            Logger.getLogger("cramagotchi.desktop")
                .warning("Could not prepare WebView data dir; storage stays session-only: $e")
            null
        }
    }
}

fun main() {
    Application.launch(CramagotchiDesktopApp::class.java)
}
