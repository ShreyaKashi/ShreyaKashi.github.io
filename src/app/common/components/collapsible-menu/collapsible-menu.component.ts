import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-collapsible-menu',
  templateUrl: './collapsible-menu.component.html',
  styleUrls: ['./collapsible-menu.component.scss']
})
export class CollapsibleMenuComponent implements OnInit {

  @Input() menuArr: any;
  @Output() selectedItem = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  onClickLink(pageID: any) {
    this.selectedItem.emit(pageID);
  }

}
