import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from "@angular/router";
import { Observable } from "rxjs";
import { DataService } from "./data.service";

@Injectable({
  providedIn: "root"
})
export class LoggedInGuard implements CanActivate {
  constructor(private service: DataService, private router: Router) {}

  canActivate() {
    console.log("checking access...");
    if (!this.service.isLoggedIn.value) {
      console.log("user is not logged in");
      this.router.navigate(["login"]);
      return false;
    }
    return true;
  }
}
