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
    loadChildren: () =>
      import("./patient/patient.module").then(mod => mod.PatientModule)
  },
  {
    path: "provider",
    canActivate: [LoggedInGuard],
    loadChildren: () =>
      import("./provider/provider.module").then(mod => mod.ProviderModule)
  }
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {}
