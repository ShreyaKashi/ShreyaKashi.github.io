import { Component, OnInit } from '@angular/core';
import { writtenContent } from './written-content'

@Component({
  selector: 'app-written-content',
  templateUrl: './written-content.component.html',
  styleUrls: ['./written-content.component.scss']
})
export class WrittenContentComponent implements OnInit {

  constructor() { }
  menuArr = writtenContent;
  ngOnInit(): void {
  }

}
