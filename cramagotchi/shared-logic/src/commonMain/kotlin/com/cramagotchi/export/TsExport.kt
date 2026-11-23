package com.cramagotchi.export

/**
 * Platform-neutral "export to the web runtime" marker.
 *
 * On the JS target this is an actual typealias of kotlin.js.JsExport, so the
 * generated TypeScript definitions and ES-module exports are unchanged. On
 * targets without a JS-interop mirror (wasmJs on Kotlin 2.0 does not support
 * @JsExport on objects/enums/data classes; JVM/Android have no JS surface at
 * all) it compiles to a no-op annotation, letting the same common sources
 * build on every target in agents.md §2.
 */
@Target(
    AnnotationTarget.CLASS,
    AnnotationTarget.PROPERTY,
    AnnotationTarget.FUNCTION
)
expect annotation class TsExport()
