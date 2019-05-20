import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import {
  NativeScriptRouterModule,
  NSEmptyOutletComponent
} from "nativescript-angular/router";
import { TabsComponent } from "./tabs/tabs.component";
import { AccountsComponent } from "./accounts/accounts.component";
import { AccountDetailsComponent } from "./accounts/account-details/account-details.component";
import { FilesComponent } from "./files/files.component";
import { SettingsComponent } from "./settings/settings.component";
import { ChatComponent } from "./chat/chat.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { FindDoctorComponent } from "./find-doctor/find-doctor.component";

const routes: Routes = [
  {
    path: "default",
    component: TabsComponent,
    children: [
      {
        path: "dashboard",
        outlet: "dashboardTab",
        component: NSEmptyOutletComponent,
        children: [
          { path: "", redirectTo: "dashboard", pathMatch: "full" },
          { path: "dashboard", component: DashboardComponent }
        ]
      },
      {
        path: "find-doctor",
        outlet: "findDoctorTab",
        component: NSEmptyOutletComponent,
        children: [
          { path: "", redirectTo: "find-doctor", pathMatch: "full" },
          { path: "find-doctor", component: FindDoctorComponent }
        ]
      },
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
        path: "telemedicine",
        outlet: "telemedicineTab",
        component: NSEmptyOutletComponent,
        children: [
          { path: "", redirectTo: "telemedicine", pathMatch: "full" },
          { path: "telemedicine", component: ChatComponent }
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
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class PatientRoutingModule {}
