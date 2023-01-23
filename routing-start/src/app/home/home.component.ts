import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServersService } from '../servers/servers.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private servers: { id: number, name: string, status: string }[] = [];

  constructor(private serverService: ServersService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.servers = this.serverService.getServers();
  }

  loadServer(id: number) {
    //this.router.navigate(['servers'], { relativeTo: this.route });
    this.router.navigate(['/servers', id,'edit'], {queryParams: {allowEdit:'1'}, fragment: 'Loading'});
  }

}
