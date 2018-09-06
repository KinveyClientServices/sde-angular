import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { LoginRoutingModule } from "~/app/login/login-routing.module";
import { LoginComponent } from "~/app/login/login.component";

@NgModule({
  imports: [CommonModule, LoginRoutingModule],
  exports: [RouterModule],
  declarations: [LoginComponent]
})
export class LoginModule {}
