import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import {
  NativeScriptRouterModule,
  NSEmptyOutletComponent
} from "nativescript-angular/router";

import { ProviderTabsComponent } from "./provider-tabs/provider-tabs.component";
import { PatientsComponent } from "./patients/patients.component";
import { AppointmentsComponent } from "./appointments/appointments.component";
import { TicketsComponent } from "./tickets/tickets.component";

const routes: Routes = [
  {
    path: "default",
    component: ProviderTabsComponent,
    children: [
      {
        path: "patients",
        outlet: "patientsTab",
        component: NSEmptyOutletComponent,
        children: [
          { path: "", redirectTo: "patients", pathMatch: "full" },
          { path: "patients", component: PatientsComponent }
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
        path: "tickets",
        outlet: "ticketsTab",
        component: NSEmptyOutletComponent,
        children: [
          { path: "", redirectTo: "tickets", pathMatch: "full" },
          { path: "tickets", component: TicketsComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class ProviderRoutingModule {}
