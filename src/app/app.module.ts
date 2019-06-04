import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule, COMPONENTS } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";

import { Config } from "./config";
import { KinveyModule } from "kinvey-angular-sdk";

@NgModule({
  declarations: [AppComponent, ...COMPONENTS],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    KinveyModule.init({
      appKey: Config.appKey,
      appSecret: Config.appSecret,
      instanceId: "kvy-us2"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
