package com.github.czyzby.example.common

import kotlin.test.Test
import kotlin.test.assertEquals

class CommonTest {
    // Caveat: Kotlin/JS test runners will not accept methods with spaces, so you cannot use backtick syntax. All test
    // names should be valid JS identifiers.

    @Test
    fun should_return_the_one_and_only_answer() {
        assertEquals(42, getAnswer())
    }
}
