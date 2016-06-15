import { Component } from '@angular/core';
import { NavbarComponent,  GeolocationComponent} from './shared/index';

@Component({
  selector: 'my-app',
  directives: [NavbarComponent, GeolocationComponent],
  template: `
    <navbar></navbar>
    <h1>My First Angular 2 App</h1>
    <my-geolocation></my-geolocation>
    `
})
export class AppComponent {

  constructor() {}
}
