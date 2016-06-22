import { geoLocationService } from './geolocation.service';
import {
    describe,
    it,
    beforeEachProviders,
    beforeEach,
    inject,
    expect
} from '@angular/core/testing';

export function main() {
    describe('GeoLocation Service', () => {
        let service:geoLocationService;

        beforeEachProviders(() => {
            return [
                geoLocationService
            ]
        });

        beforeEach(inject([geoLocationService], (_service) => {
            service = _service;
        }));

        it('shoud create service', () => {
            expect(service).toBeDefined();
        });
    });
}