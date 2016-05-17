import { GeoLocation } from './geolocation.interface';

describe('GeoLocation interfae', () => {
  it('has lat', () => {
    let geoloc: GeoLocation = {lat: 4.2, lon: 4.2};
    expect(geoloc.lat).toEqual(4.2);
  });
  it('has lon', () => {
    let geoloc: GeoLocation = {lat: 4.2, lon: 4.2};
    expect(geoloc.lon).toEqual(4.2);
  });
});
