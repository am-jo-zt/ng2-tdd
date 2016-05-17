import { Injectable } from 'angular2/core';
import { Observable } from 'rxjs/Observable';
import { GeoLocation} from './geolocation.interface';

@Injectable()
export class geoLocationService {

  constructor() {}

  public getGeoLoc(): Observable<any> {
    return Observable.create(observer => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            let geolocation: GeoLocation = {lat: position.coords.longitude,
                                            lon: position.coords.latitude};
            console.log(geolocation);
            observer.next(geolocation);
            observer.complete();
          },
          (error) => {
            let errorMsg = 'An unknown error occurred.';
            switch(error.code) {
              case error.PERMISSION_DENIED:
                errorMsg = "User denied the request for Geolocation."
                break;
              case error.POSITION_UNAVAILABLE:
                errorMsg = "Location information is unavailable."
                break;
              case error.TIMEOUT:
                errorMsg = "The request to get user location timed out."
                break;
            }
            console.error(errorMsg);
          },
          this.options);
      }
    });
  };
  options = {
    enableHighAccuracy: true,
    timeout: 1000000,
    maximumAge: 0
  };
}
