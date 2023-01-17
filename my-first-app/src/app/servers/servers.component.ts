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
  serverCreationStatus = 'No server was created';

  ServerName = 'Test server';

  constructor() {
    setTimeout(() => {
      this.buttonHidden = true;
      this.buttonDisable = true;
    }, 3000);
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server created';
  }

  onUpdateServerName(event: Event) {
    this.ServerName = (<HTMLInputElement>event.target).value;
  }
}
