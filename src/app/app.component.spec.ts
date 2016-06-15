import { TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { AppComponent } from './app.component';
import {
  beforeEach,
  describe,
  it,
  expect
} from '@angular/core/testing';

/**
main test fuction for app.component
*/
export function main() {
  describe('App component', () => {

    beforeEach(() => {
      this.app = new AppComponent();
    });

    it('should build without a problem', () => {
      expect(this.app).toBeDefined();
    });
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
