import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import {
  NativeScriptRouterModule,
  NSEmptyOutletComponent
} from "nativescript-angular/router";
import { TabsComponent } from "./tabs/tabs.component";
import { SettingsComponent } from "./settings/settings.component";
import { ChatComponent } from "./chat/chat.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { FindDoctorComponent } from "./find-doctor/find-doctor.component";
import { AppointmentsComponent } from "./appointments/appointments.component";
import { TelemedicineComponent } from "./telemedicine/telemedicine.component";

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
        path: "appointments",
        outlet: "appointmentsTab",
        component: NSEmptyOutletComponent,
        children: [
          { path: "", redirectTo: "appointments", pathMatch: "full" },
          { path: "appointments", component: AppointmentsComponent }
        ]
      },
      {
        path: "telemedicine",
        outlet: "telemedicineTab",
        component: NSEmptyOutletComponent,
        children: [
          { path: "", redirectTo: "telemedicine", pathMatch: "full" },
          { path: "telemedicine", component: TelemedicineComponent }
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
