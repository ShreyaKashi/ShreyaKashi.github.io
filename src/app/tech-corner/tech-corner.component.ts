import { Component, OnInit } from '@angular/core';
import { techContent } from './tech-content';

@Component({
  selector: 'app-tech-corner',
  templateUrl: './tech-corner.component.html',
  styleUrls: ['./tech-corner.component.scss']
})
export class TechCornerComponent implements OnInit {

  menuArr = techContent;

  currentID = 1;
  selectedTechContent: any;

  constructor() { }

  ngOnInit(): void {
    this.resetPage();
  }

  getTextStyle(textType: string) {
    return ''
  }

  getSelectedItem($event: any) {
    this.currentID = $event;
    this.resetPage();
  }

  resetPage() {
    let mergedContent: { id: number; heading: string; content: { text: string; type: string; }[]; }[] = []
    techContent.forEach((group)=> {
      group.groupPages.forEach((val) => {
        mergedContent.push(val)
      });
    })
    this.selectedTechContent = mergedContent.find(o => o.id === this.currentID);
  }

}
