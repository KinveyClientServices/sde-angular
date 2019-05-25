import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { SupportButtonComponent } from "./support-button/support-button.component";
import { SupportComponent } from "./support/support.component";
@NgModule({
  declarations: [SupportButtonComponent, SupportComponent],
  exports: [SupportButtonComponent, SupportComponent],
  imports: [NativeScriptCommonModule],
  schemas: [NO_ERRORS_SCHEMA],
  entryComponents: [SupportComponent]
})
export class SharedModule {}
