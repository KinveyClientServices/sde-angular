import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProviderRoutingModule } from "./provider-routing.module";
import { ProviderTabsComponent } from "./provider-tabs/provider-tabs.component";
import { PatientsComponent } from './patients/patients.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { TicketsComponent } from './tickets/tickets.component';

@NgModule({
  declarations: [ProviderTabsComponent, PatientsComponent, AppointmentsComponent, TicketsComponent],
  imports: [CommonModule, ProviderRoutingModule]
})
export class ProviderModule {}
