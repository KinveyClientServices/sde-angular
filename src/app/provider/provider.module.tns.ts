import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

import { ProviderRoutingModule } from "./provider-routing.module";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { ProviderTabsComponent } from "./provider-tabs/provider-tabs.component";
import { PatientsComponent } from "./patients/patients.component";
import { AppointmentsComponent } from "./appointments/appointments.component";
import { TicketsComponent } from "./tickets/tickets.component";

@NgModule({
  declarations: [
    ProviderTabsComponent,
    PatientsComponent,
    AppointmentsComponent,
    TicketsComponent
  ],
  imports: [ProviderRoutingModule, NativeScriptCommonModule],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ProviderModule {}
