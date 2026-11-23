package com.cramagotchi.export

/** JVM (desktop) target: no JS surface — no-op marker. */
@Target(
    AnnotationTarget.CLASS,
    AnnotationTarget.PROPERTY,
    AnnotationTarget.FUNCTION
)
@Retention(AnnotationRetention.SOURCE)
actual annotation class TsExport actual constructor()
