import { Component, OnInit } from 'angular2/core';
import { geoLocationService } from './geolocation.service';
import { GeoLocation } from './geolocation.interface';

@Component({
  selector: 'my-geolocation',
  providers: [geoLocationService],
  template: `
            <div *ngIf="geoloc">
              <p>Current lat: {{ geoloc.lat }}</p>
              <p>Current lon: {{ geoloc.lon }}</p>
            </div>
            `
})
export class GeolocationComponent implements OnInit {

  geoloc: GeoLocation;

  constructor(private _location: geoLocationService) {}

  getGeoLoc() {
    this._location.getGeoLoc().subscribe(geoloc => this.geoloc = geoloc);
  }

  ngOnInit() {
    this.getGeoLoc();
  }
}
