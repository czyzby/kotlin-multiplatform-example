package com.github.czyzby.example.client

import com.github.czyzby.example.common.getAnswer
import kotlin.test.Test
import kotlin.test.asserter

class ServerTest {
    // JS test names cannot contain illegal characters.

    @Test
    fun the_answer_should_be_correct() {
        asserter.assertEquals("The answer must be 42.", 42, getAnswer())
    }
}
