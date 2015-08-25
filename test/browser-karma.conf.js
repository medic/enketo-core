// Karma configuration
// Generated on Mon Mar 16 2015 13:42:33 GMT-0600 (MDT)

module.exports = function( config ) {
    config.set( {

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '..',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: [ 'browserify', 'jasmine' ],


        // list of files / patterns to load in the browser
        files: [
            'test/mock/*.js',
            'test/spec/*spec.js', // covers both .spec.js and .browser-spec.js
            {
                pattern: 'src/js/*.js',
                included: false
            }, {
                pattern: 'src/widget/*/*.*',
                included: false
            }, {
                pattern: 'config.json',
                included: false
            },{
                pattern: 'src/widget/time/bootstrap3-timepicker/js/bootstrap-timepicker.js',
                included: false
            }, {
                pattern: 'lib/text/text.js',
                included: false
            }, {
                pattern: 'lib/bower-components/mergexml/mergexml.js',
                included: false
            },
        ],


        // list of files to exclude
        exclude: [],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'test/**/*.js': [ 'browserify' ],
        },


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: [ 'progress' ],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: [],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false
    } );
};
