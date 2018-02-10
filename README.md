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
* Rename packages (preferably with IntelliJ `Refactor > Rename`). Replace `com.github.czyzby` throughout the project.
* Include your project dependencies in subprojects `build.gradle` files.
* Choose a cool title in [`webpack.config.js`](client/webpack.config.js).
* Write actual code. [Or not.](https://github.com/kelseyhightower/nocode)

## Useful Gradle tasks

* `server:test`: runs server tests and common tests compiled with server `actual` implementations via JUnit runner.
* `client:test`: runs client tests and common tests compiled with client `actual` implementations via Karma/Mocha/QUnit.
* `test`, `check`: runs tests (or tests with all checks) in every subproject.
* `server:run`: runs `main` function of the server project.
* `client:run`: setups Yarn dev server at `localhost:8080` which automatically reloads when you recompile KotlinJS
sources with `runDceKotlinJs`. Press F12 and read the console to see if it works.
* `client:runDceKotlinJs`: performs dead code removal; depends on tasks that compile JS application.
* `assemble`: builds a standalone runnable jar at `server/build/libs` and bundles JS sources to `client/build/dist`.
* `client:bundle`: invokes Yarn task that packs and minifies JS sources and exports them to `client/build/dist`. Invoked
by `assemble`.
* `client:copyStaticResources`: copies files from `client/src/main/resources` to `client/build/dist`. Copied files will
be served by the dev server (`client:run`). Automatically invoked by `bundle` and `client:run`.
