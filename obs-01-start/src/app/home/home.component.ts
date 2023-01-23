import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private firstObsSub: Subscription;
  constructor() { }

  ngOnInit() {
    const customObservable = Observable.create(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count > 3)
          observer.error(new Error('Count is greater than !'));
        count++;
      }, 1000);
    });
    this.firstObsSub = customObservable.subscribe(data => console.log(data), error => {
      console.log(error);
      alert(error.message);
    });
  }

  ngOnDestroy(): void {
    this.firstObsSub.unsubscribe();
  }

}
