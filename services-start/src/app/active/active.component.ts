import { Component, OnInit } from '@angular/core';
import { CountService } from '../count.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.css']
})
export class ActiveComponent implements OnInit {
  users: { name: string, status: string }[] = [];

  constructor(private usrSer: UsersService) {
  }


  ngOnInit(): void {
    this.users = this.usrSer.users;
  }

  changeStatus(id) {
    this.usrSer.updateStatus(id, 'inactive');
  }
}
