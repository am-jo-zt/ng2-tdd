import { TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core'
import { AppComponent } from './app.component';
import {
    describe,
    it,
    expect,
    injectAsync
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

                    expect(el.innerHTML).toBe('My First Angular 2 App');
                })
        }));
    });
}

@Component({
    selector: 'test-cmp',
    directives: [AppComponent],
    template: `
        <my-app></my-app>
    `
})
class TestComponent {}