import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { MapComponent } from "./map/map.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LayoutComponent } from "./layout/layout.component";
import { SettingsComponent } from "./settings/settings.component";
import { GridModule } from '@progress/kendo-angular-grid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApplicationDetailsComponent } from './application-details/application-details.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    MapComponent,
    LayoutComponent,
    SettingsComponent,
    ApplicationDetailsComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule, GridModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
