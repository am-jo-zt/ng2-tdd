"use strict";
describe('GeoLocation interfae', function () {
    it('has lat', function () {
        var geoloc = { lat: 4.2, lon: 4.2 };
        expect(geoloc.lat).toEqual(4.2);
    });
    it('has lon', function () {
        var geoloc = { lat: 4.2, lon: 4.2 };
        expect(geoloc.lon).toEqual(4.2);
    });
});
//# sourceMappingURL=geolocation.interface.spec.js.map