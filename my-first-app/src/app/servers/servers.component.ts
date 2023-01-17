import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  //selector: '[app-servers]',
  //selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  buttonHidden = false;
  buttonDisable = false;
  constructor() {
    setTimeout(() => {
      this.buttonHidden = true;
      this.buttonDisable = true;
    }, 3000);
  }
}
