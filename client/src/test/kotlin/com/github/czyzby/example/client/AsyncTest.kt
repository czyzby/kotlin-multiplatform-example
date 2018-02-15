@file:Suppress("unused")

package com.github.czyzby.example.client

import com.github.czyzby.example.common.getAnswer
import kotlin.browser.window
import kotlin.js.Promise
import kotlin.test.Ignore
import kotlin.test.Test
import kotlin.test.assertEquals

/**
 * Example of asynchronous code testing. Any time you work with promises, intervals, resource fetching or basically any
 * asynchronous code that would otherwise end the test too early or make asserts impossible, this test template might
 * be useful.
 */
class AsyncTest {
    @Test
    fun should_perform_asynchronous_test() = Promise<Unit> { resolve, _ ->
        window.setInterval({
            assertEquals(42, getAnswer())
            // Make sure to call resolve to end the test:
            resolve(Unit)
        }, 10)
    }

    @Test
    @Ignore
    fun should_fail() = Promise<Unit> { _, reject ->
        window.setInterval({
            // You can also explicitly fail the test with an exception:
            reject(Exception("Expected!"))
        }, 10)
    }
}
