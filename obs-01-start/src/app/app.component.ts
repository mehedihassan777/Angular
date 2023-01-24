import { Component, OnInit } from '@angular/core';
import { UserService } from './users/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private usrSer: UserService) { }
  
  activated = false;

  ngOnInit() {
    this.usrSer.activatedSubject.subscribe(data => {
      this.activated = data;
    })
  }
}
