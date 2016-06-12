"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var geolocation_service_1 = require('./geolocation.service');
var GeolocationComponent = (function () {
    function GeolocationComponent(_location) {
        this._location = _location;
    }
    GeolocationComponent.prototype.getGeoLoc = function () {
        var _this = this;
        this._location.getGeoLoc().subscribe(function (geoloc) { return _this.geoloc = geoloc; }, function (error) { return _this.error = error; }, function () { return console.info('geoloc scanning done'); });
    };
    GeolocationComponent.prototype.ngOnInit = function () {
        this.getGeoLoc();
    };
    GeolocationComponent = __decorate([
        core_1.Component({
            selector: 'my-geolocation',
            providers: [geolocation_service_1.geoLocationService],
            //TODO: use a html file
            template: "\n    <div *ngIf=\"geoloc && !error\" class=\"alert-box success\">\n      <span>success: </span>lat: {{ geoloc.lat | number:'2.1-6' }} lon: {{ geoloc.lon | number:'2.1-6' }}\n    </div>\n    <div *ngIf=\"!geoloc && !error\" class=\"alert-box notice\">\n      <span>notice: </span>scanning....\n    </div>\n    <div *ngIf=\"error\" class=\"alert-box error\">\n      <span>error: </span> {{ error }}\n    </div>",
            //TODO: use a css file
            styles: ['.alert-box { border-radius:10px; padding:10px; margin:10px;}',
                '.alert-box span { font-weight:bold; text-transform:uppercase; }',
                '.notice { border:1px solid; }',
                '.error { border:1px solid; }',
                '.success { border:1px solid; }']
        }), 
        __metadata('design:paramtypes', [geolocation_service_1.geoLocationService])
    ], GeolocationComponent);
    return GeolocationComponent;
}());
exports.GeolocationComponent = GeolocationComponent;
//# sourceMappingURL=geolocation.component.js.map