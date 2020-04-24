import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  redirect_uri;
  app_state;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.redirect_uri = this.route.snapshot.queryParamMap.get('redirect_uri');
    console.log("This is the value of redirect_uri" + this.redirect_uri);
    this.app_state = this.route.snapshot.queryParamMap.get('app_state');
    console.log("This is the value of app_state" + this.app_state);
  }

}
