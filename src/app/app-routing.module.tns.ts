import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { LoginComponent } from "./login/login.component";
import { LoggedInGuard } from "./logged-in.guard";
import { AnonGuard } from "./anon.guard";

export const COMPONENTS = [LoginComponent];

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  {
    path: "login",
    component: LoginComponent,
    canActivate: [AnonGuard]
  },
  {
    path: "patient",
    canActivate: [LoggedInGuard],
    loadChildren: "~/app/patient/patient.module#PatientModule"
  },
  {
    path: "provider",
    canActivate: [LoggedInGuard],
    loadChildren: "~/app/provider/provider.module#ProviderModule"
  }
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {}
