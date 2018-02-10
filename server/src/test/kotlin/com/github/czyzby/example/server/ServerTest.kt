package com.github.czyzby.example.server

import com.github.czyzby.example.common.getAnswer
import org.junit.Assert.assertEquals
import kotlin.test.Test

class ServerTest {
    // On JVM backend, you can use backticks syntax for tests, although you might want to choose a different
    // convention for consistency. Note that Gradle test task runs both server and common tests.

    @Test
    fun `just to be sure, the answer should be correct`() {
        assertEquals(42, getAnswer())
    }
}
