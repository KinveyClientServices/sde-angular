import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { ProductsComponent } from "./products/products.component";
import { FilesComponent } from "./files/files.component";
import { SettingsComponent } from "./settings/settings.component";
import { TasksComponent } from "./tasks/tasks.component";
import { OfflineComponent } from "./offline/offline.component";
import { MapComponent } from "./map/map.component";
import { ChatComponent } from "./chat/chat.component";
import { ArComponent } from "./ar/ar.component";
import { LoginComponent } from "./login/login.component";
import { AddTaskComponent } from "./tasks/add-task/add-task.component";
import { FileDetailsComponent } from "./files/file-details/file-details.component";
import { LayoutComponent } from "./layout/layout.component";
import { AccountsComponent } from "./accounts/accounts.component";
import { AccountDetailsComponent } from "./accounts/account-details/account-details.component";

import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular/side-drawer-directives";

// Uncomment and add to NgModule imports if you need to use two-way binding
import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';
import { NativeChatModule } from "@progress-nativechat/nativescript-nativechat/angular";

import { isAndroid, isIOS, device, screen } from "tns-core-modules/platform";
import { KinveyModule } from "kinvey-nativescript-sdk/angular";
import { Config } from "./config";
import { TabsComponent } from "./tabs/tabs.component";

declare var GMSServices: any;
if (isIOS) {
  GMSServices.provideAPIKey("AIzaSyBBIAv8OR81gBsM1KhitCGGZpTOEbdMpvw");
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArComponent,
    ChatComponent,
    AccountsComponent,
    AccountDetailsComponent,
    FilesComponent,
    LoginComponent,
    MapComponent,
    OfflineComponent,
    ProductsComponent,
    SettingsComponent,
    TasksComponent,
    AddTaskComponent,
    FileDetailsComponent,
    LayoutComponent,
    TabsComponent
  ],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    NativeScriptFormsModule,
    NativeScriptUISideDrawerModule,
    NativeChatModule,
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
