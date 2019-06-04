import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { AnonGuard } from "./anon.guard";
import { LoggedInGuard } from "./logged-in.guard";
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
