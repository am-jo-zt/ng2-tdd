import { TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { NavbarComponent } from './navbar.component';
import {
    describe,
    it,
    injectAsync,
    expect
} from '@angular/core/testing';

export function main() {
    describe('Navbar component', () => {
        it('shoud build and have headline', injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
            return tcb.createAsync(TestComponent)
                .then(fixture => {
                    let el = fixture.debugElement.children[0].nativeElement;
                    expect(el.querySelector('h1').textContent).toBe('navbar');
                });
        }));
    });
}

@Component({
    selector: 'test-cmp',
    directives: [NavbarComponent],
    template: '<navbar></navbar>'
})
class TestComponent {}