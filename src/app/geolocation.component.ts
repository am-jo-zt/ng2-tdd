import { Component, OnInit } from 'angular2/core';
import { geoLocationService } from './geolocation.service';
import { GeoLocation } from './geolocation.interface';

@Component({
  selector: 'my-geolocation',
  providers: [geoLocationService],
  //TODO: use a html file
  template: `
    <div *ngIf="geoloc && !error" class="alert-box success">
      <span>success: </span>lat: {{ geoloc.lat | number:'2.1-6' }} lon: {{ geoloc.lon | number:'2.1-6' }}
    </div>
    <div *ngIf="!geoloc && !error" class="alert-box notice">
      <span>notice: </span>scanning....
    </div>
    <div *ngIf="error" class="alert-box error">
      <span>error: </span> {{ error }}
    </div>`,
  //TODO: use a css file
  styles: ['.alert-box { border-radius:10px; padding:10px; margin:10px;}',
    '.alert-box span { font-weight:bold; text-transform:uppercase; }',
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
