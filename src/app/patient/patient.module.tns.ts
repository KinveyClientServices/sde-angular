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
import { DashboardComponent } from './dashboard/dashboard.component';
import { FindDoctorComponent } from './find-doctor/find-doctor.component';
import { MyAppointmentsComponent } from './my-appointments/my-appointments.component';

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
    MyAppointmentsComponent
  ],
  imports: [PatientRoutingModule, NativeChatModule, NativeScriptCommonModule],
  schemas: [NO_ERRORS_SCHEMA]
})
export class PatientModule {}
