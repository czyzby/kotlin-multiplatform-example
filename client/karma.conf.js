module.exports = function (config) {
    config.set({
            frameworks: ['qunit', 'browserify'],
            reporters: ['mocha'],
            files: [
                'build/node_modules/*.js',
                'build/classes/main/*.js',
                'build/classes/kotlin/test/*.js'
            ],
            exclude: [],
            colors: true,
            autoWatch: false,
            browsers: [
                'ChromeHeadless'
            ],
            captureTimeout: 5000,
            singleRun: true,
            reportSlowerThan: 500,

            preprocessors: {
                '**/*.js': ['browserify']
            }
        }
    )
};
