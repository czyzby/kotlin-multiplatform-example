@file:Suppress("unused")

package com.github.czyzby.example.client

import com.github.czyzby.example.common.CommonData
import com.github.czyzby.example.common.getAnswer
import kotlinx.serialization.protobuf.ProtoBuf
import kotlin.test.Test
import kotlin.test.asserter

class ServerTest {
    // JS test names cannot contain illegal characters.

    @Test
    fun the_answer_should_be_correct() {
        asserter.assertEquals("The answer must be 42.", 42, getAnswer())
    }

    // kotlinx-serialization usage example:

    @Test
    fun should_correctly_serialize_CommonData_in_JS() {
        //  Given:
        val data = CommonData(id = 42, name = "John")

        // When:
        val serialized = ProtoBuf.dump(data)

        // Then:
        val deserialized = ProtoBuf.load<CommonData>(serialized)
        asserter.assertEquals("Deserialized object should be equal to the original", data, deserialized)
    }
}
