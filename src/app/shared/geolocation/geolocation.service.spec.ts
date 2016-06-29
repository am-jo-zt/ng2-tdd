import { geoLocationService } from './geolocation.service';
import {
    describe,
    it,
    beforeEachProviders,
    beforeEach,
    inject
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

        beforeEach(inject([geoLocationService], (_service) => {
            service = _service;
        }));

        // specs
        //Error: Timeout - Async callback was not invoked within timeout specified by jasmine.DEFAULT_TIMEOUT_INTERVAL.
        it('should create service', done => {
            service.getGeoLoc().subscribe(
                x => {
                    console.log(x);
                    done();
                }
            );
        });
    });
}
