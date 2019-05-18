import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
export const COMPONENTS = [LoginComponent];

//routes[0].children = routes[0].children.filter(r => r.path != "ar" && r.path != "settings");

@NgModule({
  imports: [RouterModule.forRoot([])],
  exports: [RouterModule]
})
export class AppRoutingModule {}
