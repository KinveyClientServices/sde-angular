import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

import { ProviderRoutingModule } from "./provider-routing.module";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { ProviderTabsComponent } from "./provider-tabs/provider-tabs.component";
import { PatientsComponent } from "./patients/patients.component";
import { AppointmentsComponent } from "./appointments/appointments.component";
import { TicketsComponent } from "./tickets/tickets.component";
import { PatientDetailsComponent } from "./patients/patient-details/patient-details.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    ProviderTabsComponent,
    PatientsComponent,
    AppointmentsComponent,
    TicketsComponent,
    PatientDetailsComponent
  ],
  imports: [ProviderRoutingModule, NativeScriptCommonModule, SharedModule],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ProviderModule {}
