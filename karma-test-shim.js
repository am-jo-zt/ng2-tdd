// Tun on full stack traces in errors to help debugging
Error.stackTraceLimit = Infinity;


jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000;

// // Cancel Karma's synchronous start,
// // we will call `__karma__.start()` later, once all the specs are loaded.
__karma__.loaded = function() {};


System.config({
  packages: {
    'dist/app': {
      defaultJSExtension: true,
      format: 'register',
      map: Object.keys(window.__karma__.files).
            filter(onlyAppFiles).
            reduce(function createPathRecords(pathsMapping, appPath) {
              var moduleName = appPath.replace(/^\/dist\/app\//, './').replace(/\.js$/, '');
              pathsMapping[moduleName] = appPath + '?' + window.__karma__.files[appPath];
              return pathsMapping;
            }, {})

      }
    }
});

System.import('angular2/testing').then(function(testing) {
  return System.import('angular2/platform/testing/browser').then(function(providers) {
    testing.setBaseTestProviders(providers.TEST_BROWSER_PLATFORM_PROVIDERS,
                                 providers.TEST_BROWSER_APPLICATION_PROVIDERS);
  });
}).then(function() {
  return Promise.all(
    Object.keys(window.__karma__.files) // All files served by Karma.
    .filter(onlySpecFiles)
    // .map(filePath2moduleName)        // Normalize paths to module names.
    .map(function(moduleName) {
      // loads all spec files via their global module names (e.g. 'base/src/app/hero.service.spec')
      return System.import(moduleName);
    }));
})
.then(function() {
  __karma__.start();
}, function(error) {
  __karma__.error(error.stack || error);
});


function filePath2moduleName(filePath) {
  return filePath.replace(/\\/g, '/')
    .replace(/^\/base\//, '')
    .replace(/\.js/, '');
}


function onlyAppFiles(filePath) {
  return /^\/dist\/app\/.*\.js$/.test(filePath);
}


function onlySpecFiles(path) {
  return /\.spec\.js$/.test(path);
}
