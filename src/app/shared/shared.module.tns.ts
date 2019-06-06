import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { SupportButtonComponent } from "./support-button/support-button.component";
import { SupportComponent } from "./support/support.component";
import { TNSFontIconModule } from "nativescript-ngx-fonticon";
@NgModule({
  declarations: [SupportButtonComponent, SupportComponent],
  exports: [SupportButtonComponent, SupportComponent, TNSFontIconModule],
  imports: [NativeScriptCommonModule, TNSFontIconModule],
  schemas: [NO_ERRORS_SCHEMA],
  entryComponents: [SupportComponent]
})
export class SharedModule {}
