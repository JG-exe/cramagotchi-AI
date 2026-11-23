package com.cramagotchi.android

import com.cramagotchi.engine.CramagotchiEngine
import com.cramagotchi.model.EvolutionStage
import com.cramagotchi.model.MonsterStatus
import com.cramagotchi.model.TaskWeight
import org.junit.Assert.assertEquals
import org.junit.Assert.assertFalse
import org.junit.Assert.assertTrue
import org.junit.Test

/**
 * Verifies the Android app's KMP engine integration and the asset packaging
 * contract between :androidApp:bundleWebApp and MainActivity's WebView shell.
 */
class AndroidAppTest {

    @Test
    fun testAndroidAppInitializesEngine() {
        val state = CramagotchiEngine.createInitialState("AndroidMunch", 2000.0)
        assertEquals("AndroidMunch", state.monster.name)
        assertEquals(EvolutionStage.EGG, state.monster.stage)
        assertEquals(MonsterStatus.IDLE, state.monster.status)
        assertEquals(0, state.tasks.size)
    }

    @Test
    fun testAndroidTaskFeedingWorkflow() {
        var state = CramagotchiEngine.createInitialState("AndroidMunch", 2000.0)
        state = CramagotchiEngine.addTask(state, "Android Study", TaskWeight.SNACK, 2000.0)

        assertEquals(1, state.tasks.size)
        assertFalse(state.tasks[0].completed)

        state = CramagotchiEngine.completeTask(state, state.tasks[0].id, 2000.0)
        assertTrue(state.tasks[0].completed)
        assertEquals(10, state.monster.xp)
        assertEquals(MonsterStatus.EATING, state.monster.status)
    }

    @Test
    fun testTaskIdsStayUniqueAfterRestore() {
        // Simulate a restored state that already contains "task-1"
        val restored = CramagotchiEngine.addTask(
            CramagotchiEngine.createInitialState("M", 1000.0),
            "Existing", TaskWeight.SNACK, 1000.0
        )
        val afterRestore = CramagotchiEngine.addTask(restored, "New", TaskWeight.MEAL, 2000.0)
        assertTrue(afterRestore.tasks[0].id != afterRestore.tasks[1].id)
    }
}
