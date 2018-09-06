import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { DataService } from "~/app/data.service";
import { LoggedInAuthGuard, AnonAuthGuard } from "~/app/auth-guard";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [DataService, LoggedInAuthGuard, AnonAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
