import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

// Uncomment and add to NgModule imports if you need to use two-way binding
import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';

import { isIOS } from "tns-core-modules/platform";
import { KinveyModule } from "kinvey-nativescript-sdk/angular";
import { Config } from "./config";
import { COMPONENTS } from "./app-routing.module";

@NgModule({
  declarations: [AppComponent, ...COMPONENTS],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    NativeScriptFormsModule,
    KinveyModule.init({
      appKey: Config.appKey,
      appSecret: Config.appSecret,
      instanceId: "kvy-us2"
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}
