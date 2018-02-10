module.exports = function (config) {
    config.set({
            frameworks: ['qunit'],
            reporters: ['mocha'],
            files: [
                'build/node_modules/kotlin.js',
                'build/node_modules/kotlin-test.js',
                'build/node_modules/*.js',
                'build/classes/main/*.js',
                'build/classes/kotlin/test/*.js'
            ],
            exclude: [],
            colors: true,
            autoWatch: false,
            browsers: [
                'PhantomJS'
            ],
            captureTimeout: 5000,
            singleRun: true,
            reportSlowerThan: 500,
        }
    )
};
