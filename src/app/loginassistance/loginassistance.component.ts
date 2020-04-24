import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-loginassistance',
  templateUrl: './loginassistance.component.html',
  styleUrls: ['./loginassistance.component.css']
})
export class LoginassistanceComponent implements OnInit {

  failed_login;
  execution;
  client_id;
  redirect_uri;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.failed_login = this.route.snapshot.queryParamMap.get('app_state');
    console.log("This is the value of redirect_uri" + this.failed_login);
    this.execution = this.route.snapshot.queryParamMap.get('execution');
    console.log("This is the value of execution" + this.execution);
    this.client_id = this.route.snapshot.queryParamMap.get('client_id');
    console.log("This is the value of client_id" + this.client_id);
    this.redirect_uri = this.route.snapshot.queryParamMap.get('redirect_uri');
    console.log("This is the value of redirect_uri" + this.redirect_uri);
  }

}
