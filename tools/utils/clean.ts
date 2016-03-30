import * as util from 'gulp-util';
import * as chalk from 'chalk';
import * as rimraf from 'rimraf';
import * as del from 'del';

export function clean(path: string) {
  return del([path]).then(p => { console.log('Delete: ', p.join('')); });
}
