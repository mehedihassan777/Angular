import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css']
})
export class Assignment3Component {
  displayDetailsHide = false;
  //buttonClicked = 0;
  countArray: Array<Date> = [];

  displayDetails() {
    //this.buttonClicked += 1;
    this.countArray.push(new Date());
    if (this.displayDetailsHide)
      this.displayDetailsHide = false;
    else
      this.displayDetailsHide = true;
  }

}
