"use strict";
var testing_1 = require('angular2/testing');
var app_component_1 = require('./app.component');
describe('AppComponent', function () {
    testing_1.beforeEachProviders(function () { return [
        app_component_1.AppComponent
    ]; });
    testing_1.it('should exist', testing_1.inject([app_component_1.AppComponent], function (appComponent) {
        testing_1.expect(appComponent).toBeDefined();
    }));
});
//# sourceMappingURL=app.component.spec.js.map