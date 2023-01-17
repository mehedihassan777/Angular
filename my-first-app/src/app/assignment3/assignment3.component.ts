import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css']
})
export class Assignment3Component {
  displayDetailsHide = false;
  buttonClicked = 0;
  lessFive = true;
  countArray: Array<number> = [];

  displayDetails() {
    this.buttonClicked += 1;
    this.countArray.push(this.buttonClicked);
    if (this.buttonClicked > 4)
      this.lessFive = false;
    if (this.displayDetailsHide)
      this.displayDetailsHide = false;
    else
      this.displayDetailsHide = true;
  }

  getBgColote() {
    if (!this.lessFive) {
      return 'blue';
    }
  }
}
