import * as gulp from 'gulp';
import * as util from 'gulp-util'
import * as runSequence from 'run-sequence';
import * as del from 'del';
import * as chalk from 'chalk';
import {join} from 'path';
import {DEV_DEST, APP_DEST, APP_SRC} from './tools/config';
import * as gulpLoadPlugins from 'gulp-load-plugins';

const plugins = <any>gulpLoadPlugins();

gulp.task('default', () => {
	console.log('Hello world!');
});

gulp.task('clean.dev', () => {
	return del([DEV_DEST]).then(p => {
		if (p.length > 0) {
			util.log('Delete: ', p.join(''));
		}
	});
});

gulp.task('build.assets.dev', () => {
	return gulp.src([
      join(APP_SRC, '**'),
      '!' + join(APP_SRC, '**', '*.ts')
    ])
    .pipe(gulp.dest(APP_DEST));
});

gulp.task('build.js.dev', () => {
	let tsProject = plugins.typescript.createProject('tsconfig.json', {
      typescript: require('typescript')
    });
	let src = [
		'typings/browser.d.ts',
		join(APP_SRC, '**/*.ts'),
    '!' + join(APP_SRC, '**/*.e2e.ts')
	];
	let result =  gulp.src(src)
		.pipe(plugins.plumber())
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.typescript(tsProject));

  return result.js
    .pipe(plugins.sourcemaps.write('.'))
    .pipe(gulp.dest(APP_DEST));
});

gulp.task('build.dev', (done: any) =>
	runSequence('clean.dev',
							'build.js.dev',
							'build.assets.dev',
							done));
