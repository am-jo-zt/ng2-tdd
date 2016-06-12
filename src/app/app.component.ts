import { Component } from '@angular/core';
import { GeolocationComponent } from './geolocation.component';

@Component({
  selector: 'my-app',
  directives: [GeolocationComponent],
  template: '<h1>My First Angular 2 App</h1><my-geolocation></my-geolocation>'
})
export class AppComponent {

  constructor() {}
}
