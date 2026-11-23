package com.cramagotchi.android

import android.annotation.SuppressLint
import android.os.Bundle
import android.webkit.WebResourceRequest
import android.webkit.WebResourceResponse
import android.webkit.WebView
import android.webkit.WebViewClient
import androidx.appcompat.app.AppCompatActivity
import androidx.webkit.WebViewAssetLoader
import androidx.webkit.WebViewClientCompat

/**
 * Android shell for Cramagotchi.
 *
 * Hosts the shared Angular web app (bundled into assets at build time by the
 * :androidApp:bundleWebApp Gradle task) through WebViewAssetLoader, so the
 * Android version shares the exact same frontend as the browser and desktop
 * versions. All business logic runs through the shared-logic KMP engine,
 * which the Angular bundle itself consumes in its compiled JS form.
 */
class MainActivity : AppCompatActivity() {

    @SuppressLint("SetJavaScriptEnabled")
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        val assetLoader = WebViewAssetLoader.Builder()
            .addPathHandler("/assets/", WebViewAssetLoader.AssetsPathHandler(this))
            .build()

        val webView = WebView(this).apply {
            settings.apply {
                javaScriptEnabled = true
                domStorageEnabled = true
            }
            webViewClient = object : WebViewClientCompat() {
                override fun shouldInterceptRequest(
                    view: WebView,
                    request: WebResourceRequest
                ): WebResourceResponse? {
                    return assetLoader.shouldInterceptRequest(request.url)
                }
            }
            loadUrl("https://appassets.androidplatform.net/assets/webapp/index.html")
        }

        setContentView(webView)
    }
}
