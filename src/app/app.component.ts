import { Component } from '@angular/core';
import {NavbarComponent, GeolocationComponent} from "./shared/index";

@Component({
    moduleId: module.id,
    selector: 'my-app',
    directives: [NavbarComponent, GeolocationComponent],
    templateUrl: './app.component.html'
})
export class AppComponent { }
