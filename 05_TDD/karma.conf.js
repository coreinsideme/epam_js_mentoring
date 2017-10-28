module.exports = function(config) {
    config.set({
        basePath: '',

        browsers: ['PhantomJS'],

        frameworks: ['jasmine'],

        preprocessors: {
            'index.js': ['coverage']
        },

        files: [
            'index.js',
            'index.spec.js'
        ],

        reporters: ['progress', 'coverage'],

        coverageReporter: {
            reporters: [
                {type: 'text-summary'},
                {type: 'html'},
                {type: 'lcov', subdir: 'lcov'}
            ]
        }
    });
}