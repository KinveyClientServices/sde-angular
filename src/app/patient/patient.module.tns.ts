import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

import { PatientRoutingModule } from "./patient-routing.module";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { AccountsComponent } from "./accounts/accounts.component";
import { AccountDetailsComponent } from "./accounts/account-details/account-details.component";
import { FilesComponent } from "./files/files.component";
import { SettingsComponent } from "./settings/settings.component";
import { ChatComponent } from "./chat/chat.component";
import { TabsComponent } from "./tabs/tabs.component";
import { NativeChatModule } from "@progress-nativechat/nativescript-nativechat/angular";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { FindDoctorComponent } from "./find-doctor/find-doctor.component";
import { AppointmentsComponent } from "./appointments/appointments.component";
import { TelemedicineComponent } from "./telemedicine/telemedicine.component";
import { NativeScriptUIGaugeModule } from "nativescript-ui-gauge/angular";
import { RadialChartComponent } from './dashboard/radial-chart/radial-chart.component';
@NgModule({
  declarations: [
    TabsComponent,
    AccountsComponent,
    AccountDetailsComponent,
    FilesComponent,
    SettingsComponent,
    ChatComponent,
    DashboardComponent,
    FindDoctorComponent,
    AppointmentsComponent,
    TelemedicineComponent,
    RadialChartComponent
  ],
  imports: [
    PatientRoutingModule,
    NativeChatModule,
    NativeScriptCommonModule,
    NativeScriptUIGaugeModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class PatientModule {}
