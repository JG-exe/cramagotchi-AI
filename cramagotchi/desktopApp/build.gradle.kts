import org.gradle.api.tasks.Exec

plugins {
    kotlin("jvm")
    application
    id("org.openjfx.javafxplugin") version "0.1.0"
}

javafx {
    version = "21.0.4"
    modules = listOf("javafx.controls", "javafx.web")
}

kotlin {
    jvmToolchain(17)
}

application {
    mainClass.set("com.cramagotchi.desktop.MainKt")
}

// Build the shared Angular bundle (all frontend UI lives in /shared-app,
// the Angular workspace lives at the cramagotchi root).
val buildWebApp by tasks.creating(Exec::class) {
    workingDir(rootProject.projectDir)
    val npmCmd = if (org.gradle.internal.os.OperatingSystem.current().isWindows) "npm.cmd" else "npm"
    commandLine(npmCmd, "run", "build")
}

// Package the built web bundle into the desktop app's classpath resources:
// /webapp/** plus a files.txt index used by EmbeddedWebAppServer at runtime.
val bundleWebApp by tasks.creating(Sync::class) {
    dependsOn(buildWebApp)
    from(rootProject.file("dist/web-app/browser"))
    into(layout.buildDirectory.dir("resourcesMain/webapp"))
    doLast {
        val webAppDir = rootProject.file("dist/web-app/browser")
        val entries = webAppDir.walkTopDown()
            .filter { it.isFile }
            .map { it.relativeTo(webAppDir).invariantSeparatorsPath }
            .sorted()
            .joinToString(System.lineSeparator())
        file(layout.buildDirectory.dir("resourcesMain/webapp/files.txt")).writeText(entries)
    }
}

sourceSets.main {
    resources.srcDir(layout.buildDirectory.dir("resourcesMain"))
}

tasks.named("processResources") {
    dependsOn(bundleWebApp)
}

dependencies {
    implementation(project(":shared-logic"))
    testImplementation(kotlin("test"))
}
