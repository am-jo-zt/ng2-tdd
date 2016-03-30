"use strict";
var del = require('del');
function clean(path) {
    return del([path]).then(function (p) { console.log('Delete: ', p.join('')); });
}
exports.clean = clean;
//# sourceMappingURL=clean.js.map