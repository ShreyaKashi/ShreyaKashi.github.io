import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BgWithTextComponent } from "./bg-with-text/bg-with-text.component";
import { CollapsibleMenuComponent } from './collapsible-menu/collapsible-menu.component';

const commonComponents = [
    BgWithTextComponent,
    CollapsibleMenuComponent
];

@NgModule({
    declarations: [
        ...commonComponents
    ],
    imports: [
        FormsModule,
        CommonModule
    ],
    exports: [...commonComponents],
    providers: [],
    bootstrap: []
  })
  export class CommonComponentsModule { }
  