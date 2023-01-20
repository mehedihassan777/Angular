import { Component, DoCheck, OnInit } from '@angular/core';
import { AccountService } from './account.service';
import { CountService } from './count.service';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsersService]
})
export class AppComponent implements OnInit, DoCheck {

  accounts: { name: string, status: string }[] = [];
  count: number;

  constructor(private accSer: AccountService, private usrSer: CountService) {
    
    //console.log(this.usrSer.TotalCount);
  }


  ngOnInit(): void {
    this.accounts = this.accSer.accounts;
  }

  ngDoCheck(): void {
    this.count = this.usrSer.TotalCount;
  }
}
