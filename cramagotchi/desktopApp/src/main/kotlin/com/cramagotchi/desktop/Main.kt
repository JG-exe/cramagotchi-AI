package com.cramagotchi.desktop

import com.cramagotchi.engine.CramagotchiEngine
import com.cramagotchi.model.AppState
import com.cramagotchi.model.TaskWeight
import javafx.application.Application
import javafx.scene.Scene
import javafx.scene.web.WebView
import javafx.stage.Stage

/**
 * Desktop application shell for Cramagotchi.
 *
 * Shares the exact same frontend as the browser and Android versions by
 * loading the shared Angular bundle (bundled into classpath resources at
 * build time by the :desktopApp:bundleWebApp Gradle task). Set
 * CREMAGOTCHI_DEV_SERVER_URL to load the ng serve dev server instead.
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
        val startUrl = System.getenv("CREMAGOTCHI_DEV_SERVER_URL")
            ?: run {
                webAppServer = EmbeddedWebAppServer.start()
                "http://127.0.0.1:${webAppServer!!.port}/"
            }

        val webView = WebView().apply {
            engine.load(startUrl)
        }

        stage.title = "Cramagotchi Desktop Companion"
        stage.scene = Scene(webView, 1100.0, 800.0)
        stage.show()
    }

    override fun stop() {
        webAppServer?.stop()
    }
}

fun main() {
    Application.launch(CramagotchiDesktopApp::class.java)
}
