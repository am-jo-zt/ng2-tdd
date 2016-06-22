import { Component } from '@angular/core';
import {NavbarComponent} from "./shared/index";

@Component({
    moduleId: module.id,
    selector: 'my-app',
    directives: [NavbarComponent],
    templateUrl: './app.component.html'
})
export class AppComponent { }
