import { Component, OnInit } from '@angular/core';
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
  ngOnInit() {
    this.routeConfig = RouteConfig.routeLookUp;
  }

  setCurrentPage(pageName: string) {
    this.pageName = pageName;
  }

  toggleNavIcon() {
    console.log('Toggle')
    this.isNavBarOpen = !this.isNavBarOpen;
    console.log('isNavBarOpen: ', this.isNavBarOpen)
  }
}
