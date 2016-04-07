import {describe} from 'angular2/testing';
import {AppComponent} from './app.component';

describe('AppComponent', () => {

  beforeEach(function() {
    this.app = new AppComponent();
  });

  it('first test', function() {
    expect(this.app).toBeUndefined;
  });
});
