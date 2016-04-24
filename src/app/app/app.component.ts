import {Component} from 'angular2/core';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'my-app',
  template: '<h1>My First Angular 2 App</h1>'
})
export class AppComponent {

  private data: Observable<Array<any>>;

  constructor(){
      this.data = new Observable(observer => {
        setTimeout(() => {
          observer.next(42);
          observer.next(43);
          observer.complete();
        }, 2000);

        console.log('Started Observable Seq!');
      });

      let subscription = this.data.subscribe(
        value => console.log('Value: ' + value),
        error => console.error(error),
        () => console.log('Completed Observable Seq!')
      );
  }
}
