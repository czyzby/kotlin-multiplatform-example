[![Kotlin](https://img.shields.io/badge/kotlin-1.2.21-orange.svg)](http://kotlinlang.org/)
[![Build Status](https://travis-ci.org/czyzby/kotlin-multiplatform-example.svg?branch=master)](https://travis-ci.org/czyzby/kotlin-multiplatform-example)

# Kotlin multiplatform project example

This repository contains a barebones Kotlin multiplatform Gradle project with 3 modules: `common` (compiled to both JVM
bytecode and JS), `client` (compiled to JS) and `server` (complied to JVM). Assumes a simple architecture, where the
`server` module is a backend JVM application, `client` is the usual frontend web application, and the `common` module
allows to share data structures, validation logic, and so on. It also comes with a working tests setup on both target
platforms.

Feel free to use it for personal and commercial projects. 

Note that I don't feel comfortable with frontend tools and the `client` module _might_ have some issues. If you notice
any problems or invalid configurations, please create a GitHub issue.

## What to do after cloning

* Change group and version in root [`build.gradle`](build.gradle).
* Update Gradle wrapper version in [`gradle-wrapper.properties`](gradle/wrapper/gradle-wrapper.properties).
* Update dependencies' versions in [`gradle.properties`](gradle.properties) and [`package.json`](client/package.json).
* Rename packages (preferably with IntelliJ `Refactor > Rename`), replace `com.github.czyzby` throughout the project.
* Include your project dependencies in subprojects `build.gradle` files.
* Write actual code. [Or not.](https://github.com/kelseyhightower/nocode)

## Useful Gradle tasks

* `server:test`: runs server tests and common tests compiled with server `actual` implementations via JUnit runner.
* `client:test`: runs client tests and common tests compiled with client `actual` implementations via Karma/Mocha.
* `test`, `check`: runs tests (or tests with all checks) in every subproject.
* `server:run`: runs `main` function of the server project.
* `client:run`: runs Webpack in watch mode at `localhost:8080` which automatically reloads when you recompile KotlinJS
sources or add copy new static resouces. (Press F12 and read the console to see if example code works.)
* `client:watch -t`: recompiles client sources and copies resources on every `src/main` file modification. Make sure to
use `-t` flag to run in continuous mode. Along with `client:run`, these two tasks provide hot reload after every file
change.
* `assemble`: builds a standalone runnable jar at `server/build/libs` and bundles JS sources to `client/build/dist`.
* `client:bundle`: invokes Webpack (with deployment configuration) to pack and minifies JS sources and exports them to
`client/build/dist`. Invoked by `assemble`.
* `client:copyStaticResources`: copies files from `client/src/main/resources` to `client/build/dist`. Copied files will
be served by the dev server (`client:run`). Automatically invoked by `bundle` and `client:run`.

### Typical workflow

During development, run `./gradlew client:run` and `./gradlew -t client:watch` to deploy the client application locally
on `localhost:8080` with hot reload on each file change. Use your server framework of choice to run the server
application. If anything unexpected happens, run `./gradlew clean` and repeat.

Caveat: `Ctrl+C` will not kill Webpack (`client:run`). [This is a known issue](https://github.com/srs/gradle-node-plugin/issues/143).
You can avoid it by turning off Gradle deamons or installing Yarn locally and using `yarn run start` instead of the
Gradle task.

To deploy, run `./gradlew assemble`. `server/build/libs` will contain a standalone runnable jar, and `client/build/dist`
will contain your resources, Webpack-generated HTML file and bundled JS files.

## Extras

See [this commit in kotlinx-serialization branch](https://github.com/czyzby/kotlin-multiplatform-example/commit/2be66023daf2736c1946f5c753221a45dd3ec1d4)
branch for [kotlinx-serialization](https://github.com/Kotlin/kotlinx.serialization) integration example.

Client project contains examples of
[asynchronous tests](client/src/test/kotlin/com/github/czyzby/example/client/AsyncTest.kt).
