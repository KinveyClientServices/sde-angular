import { Routes } from "@angular/router";
import { LoggedInGuard } from "./logged-in.guard";
import { AnonGuard } from "./anon.guard";
import { HomeComponent } from "./home/home.component";
import { ProductsComponent } from "./products/products.component";

import { LoginComponent } from "./login/login.component";
import { LayoutComponent } from "./layout/layout.component";

export const routes: Routes = [
  {
    path: "",
    canActivate: [LoggedInGuard],
    component: LayoutComponent,
    children: [
      { path: "", redirectTo: "home", pathMatch: "full" },
      { path: "home", component: HomeComponent },
      { path: "products", component: ProductsComponent }
    ]
  },
  { path: "login", component: LoginComponent, canActivate: [AnonGuard] }
]; //{ path: "", redirectTo: "products", pathMatch: "full" },
