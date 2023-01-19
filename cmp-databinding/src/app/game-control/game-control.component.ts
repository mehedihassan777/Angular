import { Component, EventEmitter, Output } from '@angular/core';
import { OddComponent } from '../odd/odd.component';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {

  timeout;
  count = 0;
  @Output() gameScores = new EventEmitter<number>();
  startTimer() {
    this.timeout = setInterval(() => { this.gameScores.emit(this.count); this.count += 1;}, 1000);
  }

  stopTimer() {
    clearInterval(this.timeout);
  }
}
