"use strict";
var Config = (function () {
    function Config() {
        this.DIST_DIR = 'dist';
        this.TEST_DIR = 'test';
        this.DEV_DIR = 'dev';
        this.DEV_DEST = this.DIST_DIR + "/dev";
        this.APP_DEST = this.DIST_DIR + "/dev";
        this.APP_SRC = 'src';
    }
    return Config;
}());
exports.Config = Config;
//# sourceMappingURL=config.js.map