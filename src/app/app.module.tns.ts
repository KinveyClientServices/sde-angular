import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";

import { SettingsComponent } from "./settings/settings.component";

import { MapComponent } from "./map/map.component";

import { LoginComponent } from "./login/login.component";

import { LayoutComponent } from "./layout/layout.component";


import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular/side-drawer-directives";

// Uncomment and add to NgModule imports if you need to use two-way binding
import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';
import { NativeChatModule } from "@progress-nativechat/nativescript-nativechat/angular";
import { ApplicationDetailsComponent } from './application-details/application-details.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    MapComponent,
    SettingsComponent,
    SettingsComponent,
    LayoutComponent,
    ApplicationDetailsComponent
  ],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    NativeScriptFormsModule,
    NativeScriptUISideDrawerModule,
    NativeChatModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
