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
  serverCreated = false;

  serverName = 'Test server';
  servers = ['Testserver', 'Testserver 2'];

  constructor() {
    setTimeout(() => {
      this.buttonHidden = true;
      this.buttonDisable = true;
    }, 3000);
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server created! Name is ' + this.serverName;
    this.servers.push(this.serverName);
    this.serverCreated = true;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
