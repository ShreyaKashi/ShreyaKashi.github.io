import { Component, OnInit } from '@angular/core';
import { techContent } from './tech-content';

@Component({
  selector: 'app-tech-corner',
  templateUrl: './tech-corner.component.html',
  styleUrls: ['./tech-corner.component.scss']
})
export class TechCornerComponent implements OnInit {

  menuArr = techContent;


  constructor() { }

  ngOnInit(): void {
  }


}
