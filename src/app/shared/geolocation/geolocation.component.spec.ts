import { TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { GeolocationComponent } from './geolocation.component';
import {
    describe,
    it,
    injectAsync,
    expect
} from '@angular/core/testing';


export function main() {
    describe('GeoLocation Component', () => {
        it('should build', injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
            return tcb.createAsync(TestComponent)
                .then(fixture => {
                    let el = fixture.debugElement.children[0].nativeElement;
                    expect(el).toBeTruthy();
                });
        }));
    });
}

@Component({
    selector: 'test-cmp',
    directives: [GeolocationComponent],
    template: '<my-geolocation></my-geolocation>'
})
class TestComponent {}