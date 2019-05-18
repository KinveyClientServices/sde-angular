import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PatientRoutingModule } from "./patient-routing.module";
import { TabsComponent } from "./tabs/tabs.component";
import { AccountsComponent } from "./accounts/accounts.component";
import { AccountDetailsComponent } from "./accounts/account-details/account-details.component";
import { FilesComponent } from "./files/files.component";
import { SettingsComponent } from "./settings/settings.component";

@NgModule({
  declarations: [
    TabsComponent,
    AccountsComponent,
    AccountDetailsComponent,
    FilesComponent,
    SettingsComponent
  ],
  imports: [CommonModule, PatientRoutingModule]
})
export class PatientModule {}
