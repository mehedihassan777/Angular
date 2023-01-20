import { Component, EventEmitter, Output } from '@angular/core';
import { AccountService } from '../account.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
})
export class NewAccountComponent {
  constructor(private logSer: LoggingService, private accSer: AccountService) { }
  onCreateAccount(accountName: string, accountStatus: string) {
    this.accSer.addAccount(accountName, accountStatus);
  }
}
