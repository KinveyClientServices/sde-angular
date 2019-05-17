import { NgModule } from "@angular/core";
import {
  NativeScriptRouterModule,
  NSEmptyOutletComponent
} from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { LoginComponent } from "./login/login.component";
import { TabsComponent } from "./tabs/tabs.component";
import { AccountsComponent } from "./accounts/accounts.component";
import { AccountDetailsComponent } from "./accounts/account-details/account-details.component";
import { FilesComponent } from "./files/files.component";
import { SettingsComponent } from "./settings/settings.component";
import { LoggedInGuard } from "./logged-in.guard";
import { AnonGuard } from "./anon.guard";

export const COMPONENTS = [LoginComponent, TabsComponent];

const routes: Routes = [
  { path: "", redirectTo: "/tabs/default", pathMatch: "full" },
  {
    path: "login",
    component: LoginComponent,
    canActivate: [AnonGuard]
  },
  {
    path: "tabs",
    canActivate: [LoggedInGuard],
    children: [
      {
        path: "default",
        component: TabsComponent,
        children: [
          {
            path: "accounts",
            outlet: "accountsTab",
            component: NSEmptyOutletComponent,
            children: [
              { path: "", redirectTo: "accounts", pathMatch: "full" },
              { path: "accounts", component: AccountsComponent },
              { path: "account/:id", component: AccountDetailsComponent }
            ]
          },
          {
            path: "files",
            outlet: "filesTab",
            component: NSEmptyOutletComponent,
            children: [
              { path: "", redirectTo: "files", pathMatch: "full" },
              { path: "files", component: FilesComponent }
            ]
          },
          {
            path: "settings",
            outlet: "settingsTab",
            component: NSEmptyOutletComponent,
            children: [
              { path: "", redirectTo: "settings", pathMatch: "full" },
              { path: "settings", component: SettingsComponent }
            ]
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {}
