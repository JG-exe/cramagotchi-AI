import org.gradle.api.tasks.Exec

plugins {
    id("com.android.application")
    kotlin("android")
}

android {
    namespace = "com.cramagotchi.android"
    compileSdk = 36

    defaultConfig {
        applicationId = "com.cramagotchi.android"
        minSdk = 24
        targetSdk = 36
        versionCode = 1
        versionName = "1.0.0"

        testInstrumentationRunner = "androidx.test.runner.AndroidJUnitRunner"
    }

    buildTypes {
        release {
            // R8 shrinker/optimizer: the Kotlin side is a thin WebView shell
            // (all app logic lives in the bundled Angular+KMP-JS assets, which
            // R8 never touches), so shrinking is safe here. androidx.webkit
            // ships its own consumer keep rules.
            isMinifyEnabled = true
            isShrinkResources = true
            proguardFiles(
                getDefaultProguardFile("proguard-android-optimize.txt"),
                "proguard-rules.pro"
            )
        }
    }

    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_17
        targetCompatibility = JavaVersion.VERSION_17
    }

    kotlinOptions {
        jvmTarget = "17"
    }

    sourceSets {
        getByName("main") {
            assets.srcDir(layout.buildDirectory.dir("generated/webappAssets/webapp"))
        }
    }
}

// Build the shared Angular bundle (all frontend UI lives in /shared-app,
// the Angular workspace lives at the cramagotchi root).
val buildWebApp by tasks.creating(Exec::class) {
    workingDir(rootProject.projectDir)
    val npmCmd = if (org.gradle.internal.os.OperatingSystem.current().isWindows) "npm.cmd" else "npm"
    commandLine(npmCmd, "run", "build")
}

// Package the built web bundle into the Android app's assets. It is served
// through WebViewAssetLoader under https://appassets.androidplatform.net/
// so the frontend has a proper origin for localStorage and the KMP engine bundle.
val bundleWebApp by tasks.creating(Sync::class) {
    dependsOn(buildWebApp)
    from(rootProject.file("dist/web-app/browser"))
    into(layout.buildDirectory.dir("generated/webappAssets/webapp"))
}

tasks.matching { it.name.contains("MergeDebugAssets") || it.name.contains("MergeReleaseAssets") }
    .configureEach { dependsOn(bundleWebApp) }

dependencies {
    implementation(project(":shared-logic"))
    implementation("androidx.core:core-ktx:1.15.0")
    implementation("androidx.appcompat:appcompat:1.7.0")
    implementation("androidx.webkit:webkit:1.12.1")
    implementation("com.google.android.material:material:1.12.0")
    testImplementation("junit:junit:4.13.2")
}
