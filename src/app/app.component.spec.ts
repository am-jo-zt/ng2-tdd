import {
  beforeEachProviders,
  expect,
  it,
  inject
} from 'angular2/testing';
import {AppComponent} from './app.component';

describe('AppComponent', () => {
  beforeEachProviders(() => [
    AppComponent
  ]);

  it('should exist', inject([AppComponent], (appComponent:AppComponent) => {
          expect(appComponent).toBeDefined();
  }));
});
