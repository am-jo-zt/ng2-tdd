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
var core_1 = require('angular2/core');
var Observable_1 = require('rxjs/Observable');
var geoLocationService = (function () {
    function geoLocationService() {
        this.options = {
            enableHighAccuracy: true,
            timeout: 20000,
            maximumAge: 0
        };
    }
    geoLocationService.prototype.getGeoLoc = function () {
        var _this = this;
        return Observable_1.Observable.create(function (observer) {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function (position) {
                    var geolocation = { lat: position.coords.latitude,
                        lon: position.coords.longitude };
                    observer.next(geolocation);
                    observer.complete();
                }, function (error) {
                    var errorMsg = 'An unknown error occurred.';
                    switch (error.code) {
                        case error.PERMISSION_DENIED:
                            errorMsg = 'User denied the request for Geolocation.';
                            break;
                        case error.POSITION_UNAVAILABLE:
                            errorMsg = 'Location information is unavailable.';
                            break;
                        case error.TIMEOUT:
                            errorMsg = 'The request to get user location timed out.';
                            break;
                    }
                    observer.error(errorMsg);
                }, _this.options);
            }
            ;
        });
    };
    ;
    geoLocationService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], geoLocationService);
    return geoLocationService;
}());
exports.geoLocationService = geoLocationService;
//# sourceMappingURL=geolocation.service.js.map