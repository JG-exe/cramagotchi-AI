package com.cramagotchi.export

/** wasmJs target: no JS-interop mirror on Kotlin 2.0 — no-op marker. */
@Target(
    AnnotationTarget.CLASS,
    AnnotationTarget.PROPERTY,
    AnnotationTarget.FUNCTION
)
@Retention(AnnotationRetention.SOURCE)
actual annotation class TsExport actual constructor()
