import { Routes } from "@angular/router";
import { LoggedInGuard } from "./logged-in.guard";
import { AnonGuard } from "./anon.guard";
import { HomeComponent } from "./home/home.component";
import { SettingsComponent } from "./settings/settings.component";
import { MapComponent } from "./map/map.component";
import { LoginComponent } from "./login/login.component";
import { LayoutComponent } from "./layout/layout.component";
import { ApplicationDetailsComponent } from "./application-details/application-details.component";

export const routes: Routes = [
  {
    path: "",
    canActivate: [LoggedInGuard],
    component: LayoutComponent,
    children: [
      { path: "", redirectTo: "home", pathMatch: "full" },
      { path: "home", component: HomeComponent },
      { path: "details/:id", component: ApplicationDetailsComponent },
      { path: "settings", component: SettingsComponent },
      { path: "map", component: MapComponent },
    ]
  },
  { path: "login", component: LoginComponent, canActivate: [AnonGuard] }
]; //{ path: "", redirectTo: "products", pathMatch: "full" },
