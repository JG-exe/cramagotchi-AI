plugins {
    kotlin("multiplatform")
    kotlin("plugin.serialization")
    id("com.android.library")
}

repositories {
    mavenCentral()
}

android {
    namespace = "com.cramagotchi.shared"
    compileSdk = 36
    defaultConfig {
        minSdk = 24
    }
    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_17
        targetCompatibility = JavaVersion.VERSION_17
    }
}

kotlin {
    // expect/actual annotation (TsExport marker) — stable enough for this use,
    // flag silences the beta classifier warning.
    compilerOptions {
        freeCompilerArgs.add("-Xexpect-actual-classes")
    }

    jvm("desktop")
    androidTarget {
        @Suppress("DEPRECATION")
        compilations.all {
            kotlinOptions.jvmTarget = "17"
        }
    }

    js(IR) {
        moduleName = "cramagotchi-shared-logic"
        browser {
            testTask {
                useKarma {
                    useChromeHeadless()
                }
            }
        }
        nodejs()
        binaries.library()
        generateTypeScriptDefinitions()
    }

    @OptIn(org.jetbrains.kotlin.gradle.targets.js.dsl.ExperimentalWasmDsl::class)
    wasmJs {
        moduleName = "cramagotchi-shared-logic-wasm"
        browser()
        binaries.library()
        generateTypeScriptDefinitions()
    }

    sourceSets {
        commonMain.dependencies {
            implementation("org.jetbrains.kotlinx:kotlinx-serialization-json:1.6.3")
        }
        commonTest.dependencies {
            implementation(kotlin("test"))
        }
    }
}

// Sync the production JS ES-module and its declarations into the shared
// Angular sources so the frontend always consumes the compiled KMP engine.
val syncJsToSharedApp by tasks.creating(Copy::class) {
    dependsOn("compileProductionLibraryKotlinJs", "jsProductionLibraryCompileSync")
    from(rootProject.layout.buildDirectory.dir("js/packages/cramagotchi-shared-logic/kotlin")) {
        include("**/*.js", "**/*.js.map", "**/*.d.ts")
        include("kotlin/**/*.js", "kotlin/**/*.js.map")
        exclude("*-test*")
    }
    into(rootProject.layout.projectDirectory.dir("shared-app/src/assets/kmp"))
}
