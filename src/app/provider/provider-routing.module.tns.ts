import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import {
  NativeScriptRouterModule,
  NSEmptyOutletComponent
} from "nativescript-angular/router";

import { ProviderTabsComponent } from "./provider-tabs/provider-tabs.component";
import { AppointmentsComponent } from "./appointments/appointments.component";

const routes: Routes = [
  {
    path: "default",
    component: ProviderTabsComponent,
    children: [
      {
        path: "appointments",
        outlet: "appointmentsTab",
        component: NSEmptyOutletComponent,
        children: [
          { path: "", redirectTo: "appointments", pathMatch: "full" },
          { path: "appointments", component: AppointmentsComponent }
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
