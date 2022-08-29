import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-collapsible-menu',
  templateUrl: './collapsible-menu.component.html',
  styleUrls: ['./collapsible-menu.component.scss']
})
export class CollapsibleMenuComponent implements OnInit {

  @Input() menuArr: any;
  selectedTechContent: any;
  currentID = 1;
  constructor() { }

  ngOnInit(): void {
    this.resetPage();
  }

  onClickLink(pageID: any) {
    this.currentID = pageID;
    this.resetPage();
  }

  getTextStyle(textType: string) {
    return ''
  }

  resetPage() {
    let mergedContent: { id: number; heading: string; content: { text: string; type: string; }[]; }[] = []
    this.menuArr.forEach((group: any)=> {
      group.groupPages.forEach((val: any) => {
        mergedContent.push(val)
      });
    })
    this.selectedTechContent = mergedContent.find(o => o.id === this.currentID);
  }

}
