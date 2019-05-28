import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";

import { LoginComponent } from "./login/login.component";

import { ProductsComponent } from "./products/products.component";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LayoutComponent } from "./layout/layout.component";

import { KinveyModule } from "kinvey-angular-sdk";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { Config } from "./config";
import { GridModule } from "@progress/kendo-angular-grid";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { KendoGridEditFormComponent } from "./kendo-grid-edit-form/kendo-grid-edit-form.component";
import { DialogsModule } from "@progress/kendo-angular-dialog";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ProductsComponent,
    LayoutComponent,
    KendoGridEditFormComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    KinveyModule.init({
      appKey: Config.appKey,
      appSecret: Config.appSecret
    }),
    GridModule,
    BrowserAnimationsModule,
    DialogsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
