import { Component } from '@angular/core';
import { NavComponent,  GeolocationComponent} from './shared/index';

@Component({
  selector: 'my-app',
  directives: [NavComponent, GeolocationComponent],
  template: '<h1>My First Angular 2 App</h1><navbar></navbar><my-geolocation></my-geolocation>'
})
export class AppComponent {

  constructor() {}
}
