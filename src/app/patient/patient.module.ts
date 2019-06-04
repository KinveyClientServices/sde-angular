import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PatientRoutingModule } from "./patient-routing.module";
import { TabsComponent } from "./tabs/tabs.component";
import { SettingsComponent } from "./settings/settings.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { FindDoctorComponent } from "./find-doctor/find-doctor.component";
import { AppointmentsComponent } from "./appointments/appointments.component";
import { TelemedicineComponent } from "./telemedicine/telemedicine.component";
import { RadialChartComponent } from "./dashboard/radial-chart/radial-chart.component";
import { SupportComponent } from "../shared/support/support.component";
import { SupportButtonComponent } from "../shared/support-button/support-button.component";

@NgModule({
  declarations: [
    TabsComponent,
    SettingsComponent,
    DashboardComponent,
    FindDoctorComponent,
    AppointmentsComponent,
    TelemedicineComponent,
    RadialChartComponent,
    SupportComponent,
    SupportButtonComponent
  ],
  imports: [CommonModule, PatientRoutingModule]
})
export class PatientModule {}
