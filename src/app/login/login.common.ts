import { Routes } from "@angular/router";
import { LoginComponent } from "~/app/login/login.component";

export const COMPONENT_DECLARATIONS: any[] = [LoginComponent];

export const PROVIDERS_DECLARATIONS: any[] = [];

export const ROUTES: Routes = [{ path: "", component: LoginComponent }];
