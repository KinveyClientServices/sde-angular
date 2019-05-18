import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { Observable } from "rxjs";
import { DataService } from "./data.service";
import { Router } from "./utils/router";

@Injectable({
  providedIn: "root"
})
export class AnonGuard implements CanActivate {
  constructor(private service: DataService, private router: Router) {}

  canActivate() {
    if (this.service.isLoggedIn.value) {
      let u: any = this.service.activeUser;
      let roleId = u.data._kmd.roles ? u.data._kmd.roles[0].roleId : null;
      if (roleId != null) {
        console.log(roleId);
        //role id is:
        //385c06fe-ab90-4fda-826a-4b428924cb99
        console.log(roleId);
        console.log("it's a doctor..");
        this.router.navigate(["../provider/default"]);
      } else {
        console.log("it's a patient");
        this.router.navigate(["../patient/default"]);
      }
      return false;
    }
    return true;
  }
}
