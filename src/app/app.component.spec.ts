import { TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { AppComponent } from './app.component';
import {
  async,
  inject,
  describe,
  it,
  expect
} from '@angular/core/testing';

/**
main test fuction for app.component
*/
export function main() {
  describe('App component', () => {
    it('should build without a problem',
      async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
        tcb.createAsync(TestComponent)
          .then((fixture) => {
            console.log(fixture.nativeElement.innerText);
            //expect(fixture.nativeElement.innerText.indexOf('HOME')).toBeTruthy();
          });
    })));
  });
}

/**
holed the component to test
*/
@Component({
  selector: 'test-cmp',
  template: 'my-app',
  directives: [AppComponent]
})
class TestComponent {}
