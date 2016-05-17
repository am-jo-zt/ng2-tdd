import { Component, OnInit } from 'angular2/core';
import { geoLocationService } from './geolocation.service';
import { GeoLocation } from './geolocation.interface';

@Component({
  selector: 'my-geolocation',
  providers: [geoLocationService],
  //TODO: use a html file
  template: `
    <div *ngIf="geoloc && !error" class="alert-box success">
      <p>lat: {{ geoloc.lat | number:'2.1-6' }} lon: {{ geoloc.lon | number:'2.1-6' }}</p>
    </div>
    <div *ngIf="!geoloc && !error" class="alert-box notice">
      <p>scanning....</p>
    </div>
    <div *ngIf="error" class="alert-box error">
      <p>{{ error }}</p>
    </div>`,
  //TODO: use a css file
  styles: ['.alert-box { border-radius:10px; padding:10px; margin:10px;}',
    '.notice { border:1px solid; }',
    '.error { border:1px solid; }',
    '.success { border:1px solid; }']
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
