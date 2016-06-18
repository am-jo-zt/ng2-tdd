import { TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core'
import { AppComponent } from './app.component';
import {
    inject,
    describe,
    it,
    expect,
    beforeEach,
    beforeEachProviders, injectAsync
} from '@angular/core/testing';

/**
main test fuction for app.component
*/
export function main() {
    describe('App component', () => {
        it('should build', injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) =>{
            return tcb.createAsync(TestComponent)
                .then(fixture => {
                    let el = fixture.debugElement.children[0].nativeElement;

                    expect(el.querySelector('h1').textContent).toEquals('My First Angular 2 App');
                })
                .catch(e => {});
        }));
    });
}

@Component({
    selector: 'test-cmp',
    template: `
        <my-app></my-app>
    `,
    directives: [AppComponent]
})
class TestComponent {}