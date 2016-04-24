// Karma configuration
module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      //
      //{pattern: 'node_modules/es6-shim/es6-shim.js', included: true, watched: false},
      //{pattern: 'node_modules/systemjs/dist/system-polyfills.js', included: true, watched: false},
      //{pattern: 'node_modules/angular2/es6/dev/src/testing/shims_for_IE.js', included: true, watched: false},
      // paths loaded by Karma
      {pattern: 'node_modules/angular2/bundles/angular2-polyfills.js', included: true, watched: false},
      {pattern: 'node_modules/systemjs/dist/system.src.js', included: true, watched: false},
      {pattern: 'node_modules/rxjs/bundles/Rx.js', included: true, watched: false},
      {pattern: 'node_modules/angular2/bundles/angular2.dev.js', included: true, watched: false},
      {pattern: 'node_modules/angular2/bundles/testing.dev.js', included: true, watched: false},
      'karma-test-shim.js',
      // paths loaded via module imports
      {pattern: 'dist/dev/app/**/*.js', included: false, watched: true},
      {pattern: 'dist/dev/app/*.html', included: false, watched: true},

      // paths to support debugging with source maps in dev tools
      {pattern: 'src/app/**/*.ts', included: false, watched: false},
      {pattern: 'dist/dev/app/**/*.js.map', included: false, watched: false}
    ],

    proxies: {
      '/dist/dev/app/': '/base/dist/dev/app/'
		},

    // list of files to exclude
    exclude: [
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'dist/**/!(*spec).js': ['coverage']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],

    coverageReporter: {
      reporters:[
        {type: 'html', subdir: '.', file: 'coverage-final.html'}
      ]
    },

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,
  });
};
