import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as RouteConfig from './route-config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ng-test';
  isNavBarOpen = false;
  routeConfig : any
  pageName = 'home';
  constructor(public router: Router) { }
  ngOnInit() {
    this.routeConfig = RouteConfig.routeLookUp;
    this.pageName = 'home';
  }

  setCurrentPage(pageName: string, pageURL: string) {
    this.pageName = pageName;
    this.router.navigate([pageURL])
  }
}
