import { Injectable } from "@angular/core";
import {
  CanActivate,
  CanActivateChild,
  ActivatedRouteSnapshot,
  CanLoad,
  RouterStateSnapshot,
  Route
} from "@angular/router";
import { Router } from "./utils/router";
import { DataService } from "./data.service";

@Injectable()
export class AnonAuthGuard implements CanActivate {
  constructor(private service: DataService, private router: Router) {}

  canActivate() {
    if (this.service.isLoggedIn.value) {
      this.router.navigate([""]);
      return false;
    }
    return true;
  }
}

@Injectable()
export class LoggedInAuthGuard implements CanActivate {
  constructor(private service: DataService, private router: Router) {}

  canActivate() {
    console.log("checking access");
    if (!this.service.isLoggedIn.value) {
      this.router.navigate(["login"]);
      return false;
    }
    return true;
  }
}
