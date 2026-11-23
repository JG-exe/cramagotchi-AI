package com.cramagotchi.desktop

import com.sun.net.httpserver.HttpExchange
import com.sun.net.httpserver.HttpServer
import java.io.File
import java.net.InetSocketAddress
import java.nio.file.Files
import java.util.concurrent.Executors

/**
 * Serves the bundled Angular web app (extracted from classpath resources)
 * over a loopback HTTP server. JavaFX WebView then loads http://127.0.0.1:<port>/
 * so the frontend has a proper origin for localStorage and the KMP engine bundle.
 */
class EmbeddedWebAppServer private constructor(
    private val server: HttpServer,
    private val rootDir: File
) {
    val port: Int = server.address.port

    fun stop() {
        server.stop(0)
        rootDir.deleteRecursively()
    }

    private inner class Handler : com.sun.net.httpserver.HttpHandler {
        override fun handle(exchange: HttpExchange) {
            val uriPath = exchange.requestURI.path.trimStart('/')
            val file = File(rootDir, if (uriPath.isBlank()) "index.html" else uriPath)
            val resolved = (if (file.isFile) file else File(rootDir, "index.html")).canonicalFile

            // The request must resolve inside the extracted webapp dir,
            // never out through ".." segments.
            if (!resolved.isFile || !resolved.path.startsWith(rootDir.canonicalPath)) {
                exchange.sendResponseHeaders(404, -1)
                exchange.close()
                return
            }

            val bytes = resolved.readBytes()
            exchange.responseHeaders.add("Content-Type", contentTypeFor(resolved.name))
            exchange.sendResponseHeaders(200, bytes.size.toLong())
            exchange.responseBody.use { it.write(bytes) }
        }
    }

    companion object {
        private const val RESOURCE_ROOT = "/webapp"

        fun start(): EmbeddedWebAppServer {
            val rootDir = Files.createTempDirectory("cramagotchi-webapp").toFile()
            extractResources(rootDir)

            val server = HttpServer.create(InetSocketAddress("127.0.0.1", 0), 0)
            server.createContext("/", EmbeddedWebAppServer(server, rootDir).Handler())
            server.executor = Executors.newFixedThreadPool(2)
            server.start()
            return EmbeddedWebAppServer(server, rootDir)
        }

        private fun extractResources(targetDir: File) {
            val names = EmbeddedWebAppServer::class.java.getResourceAsStream("$RESOURCE_ROOT/files.txt")
                ?.bufferedReader()?.readLines().orEmpty()

            require(names.isNotEmpty()) {
                "No bundled web app found under $RESOURCE_ROOT — run the :desktopApp:bundleWebApp Gradle task."
            }

            for (name in names) {
                val out = File(targetDir, name)
                out.parentFile.mkdirs()
                EmbeddedWebAppServer::class.java.getResourceAsStream("$RESOURCE_ROOT/$name")
                    ?.use { input -> out.outputStream().use { output -> input.copyTo(output) } }
            }
        }

        private fun contentTypeFor(name: String): String = when (name.substringAfterLast('.')) {
            "html" -> "text/html; charset=utf-8"
            "js", "mjs" -> "text/javascript"
            "css" -> "text/css"
            "json", "map" -> "application/json"
            "ico" -> "image/x-icon"
            "svg" -> "image/svg+xml"
            "png" -> "image/png"
            "woff2" -> "font/woff2"
            else -> "application/octet-stream"
        }
    }
}
