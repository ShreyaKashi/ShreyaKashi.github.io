import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BgWithTextComponent } from "./bg-with-text/bg-with-text.component";

const commonComponents = [
    BgWithTextComponent
];

@NgModule({
    declarations: [
        ...commonComponents
    ],
    imports: [
        FormsModule
    ],
    exports: [...commonComponents],
    providers: [],
    bootstrap: []
  })
  export class CommonComponentsModule { }
  