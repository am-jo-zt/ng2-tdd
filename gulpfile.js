"use strict";
var gulp = require('gulp');
var util = require('gulp-util');
var runSequence = require('run-sequence');
var del = require('del');
var path_1 = require('path');
var config_1 = require('./tools/config');
var gulpLoadPlugins = require('gulp-load-plugins');
var plugins = gulpLoadPlugins();
// TODO: split task in diff. files
gulp.task('default', function () {
    console.log('Hello world!');
});
gulp.task('clean.dev', function () {
    return del([config_1.DEV_DEST]).then(function (p) {
        if (p.length > 0) {
            util.log('Delete: ', p.join(''));
        }
    });
});
gulp.task('build.assets.dev', function () {
    return gulp.src([
        path_1.join(config_1.APP_SRC, '**'),
        '!' + path_1.join(config_1.APP_SRC, '**', '*.ts')
    ])
        .pipe(gulp.dest(config_1.APP_DEST));
});
gulp.task('build.js.dev', function () {
    var tsProject = plugins.typescript.createProject('tsconfig.json', {
        typescript: require('typescript')
    });
    var src = [
        'typings/browser.d.ts',
        path_1.join(config_1.APP_SRC, '**/*.ts'),
        '!' + path_1.join(config_1.APP_SRC, '**/*.e2e.ts')
    ];
    var result = gulp.src(src)
        .pipe(plugins.plumber())
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.typescript(tsProject));
    return result.js
        .pipe(plugins.sourcemaps.write('.'))
        .pipe(gulp.dest(config_1.APP_DEST));
});
gulp.task('build.dev', function (done) {
    return runSequence('clean.dev', 'build.js.dev', 'build.assets.dev', done);
});
//# sourceMappingURL=gulpfile.js.map