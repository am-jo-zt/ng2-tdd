import { geoLocationService } from './geolocation.service';
import {
    describe,
    it,
    beforeEachProviders,
    beforeEach,
    injectAsync
} from '@angular/core/testing';

export function main() {
    describe('GeoLocation Service', () => {
        let service;

        // setup
        beforeEachProviders(() => {
            return [
                geoLocationService
            ]
        });

        beforeEach(injectAsync([geoLocationService], (_service) => {
            service = _service;
        }));

        // spec
        it('should create service', () => {
            service.getGeoLoc().subscribe(
                (data) => { console.log(data); },
                (error) => { console.log(error) });
        });
    });
}