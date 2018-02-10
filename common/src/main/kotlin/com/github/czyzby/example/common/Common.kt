package com.github.czyzby.example.common

/**
 * Must be implemented by all modules and return the one and only answer Answer to the Ultimate Question of Life,
 * the Universe, and Everything. This is not the best example of a multi-platform usage, since we expect it to
 * return the same number on all platforms, but you get the idea.
 */
expect fun getAnswer(): Int
