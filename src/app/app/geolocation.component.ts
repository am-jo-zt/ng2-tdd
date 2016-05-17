import { Component, OnInit } from 'angular2/core';
import { geoLocationService } from './geolocation.service';
import { GeoLocation } from './geolocation.interface';

@Component({
  selector: 'my-geolocation',
  providers: [geoLocationService],
  template: `
            <div *ngIf="geoloc && !error">
              <p>Current lat: {{ geoloc.lat | number:'2.1-6' }}</p>
              <p>Current lon: {{ geoloc.lon | number:'2.1-6' }}</p>
            </div>
            <div *ngIf="!geoloc && !error">
              <p>scanning....</p>
            </div>
            <div *ngIf="error">
              <p>{{ error }}</p>
            </div>
            `
})
export class GeolocationComponent implements OnInit {

  geoloc: GeoLocation;
  error: string;

  constructor(private _location: geoLocationService) {}

  getGeoLoc() {
    this._location.getGeoLoc().subscribe(geoloc => this.geoloc = geoloc,
      error => this.error = error,
      () => console.info('geoloc scanning done'));
  }

  ngOnInit() {
    this.getGeoLoc();
  }
}
