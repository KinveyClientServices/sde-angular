import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { ChatComponent } from "./chat/chat.component";
import { FilesComponent } from "./files/files.component";
import { LoginComponent } from "./login/login.component";
import { MapComponent } from "./map/map.component";
import { OfflineComponent } from "./offline/offline.component";
import { ProductsComponent } from "./products/products.component";
import { TasksComponent } from "./tasks/tasks.component";
import { AddTaskComponent } from "./tasks/add-task/add-task.component";
import { FileDetailsComponent } from "./files/file-details/file-details.component";
import { FormsModule } from "@angular/forms";
import { LayoutComponent } from "./layout/layout.component";
import { ArComponent } from "./ar/ar.component";
import { AccountsComponent } from './accounts/accounts.component';
import { AccountDetailsComponent } from './accounts/account-details/account-details.component';
import { SettingsComponent } from "./settings/settings.component";
import { GridModule } from '@progress/kendo-angular-grid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChatComponent,
    FilesComponent,
    LoginComponent,
    MapComponent,
    OfflineComponent,
    ProductsComponent,
    TasksComponent,
    AddTaskComponent,
    FileDetailsComponent,
    LayoutComponent,
    ArComponent,
    AccountsComponent,
    AccountDetailsComponent,
    SettingsComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, GridModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
