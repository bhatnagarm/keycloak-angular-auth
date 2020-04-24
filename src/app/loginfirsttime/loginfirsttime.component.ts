import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-loginfirsttime',
  templateUrl: './loginfirsttime.component.html',
  styleUrls: ['./loginfirsttime.component.css']
})
export class LoginfirsttimeComponent implements OnInit {

  redirect_uri;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.redirect_uri = this.route.snapshot.queryParamMap.get('redirect_uri');
    console.log("This is the value of redirect_uri" + this.redirect_uri);
  }

}
