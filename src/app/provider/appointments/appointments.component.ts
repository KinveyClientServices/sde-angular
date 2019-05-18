import { Component, OnInit } from "@angular/core";
import { DataService } from "../../data.service";
import { Router } from "../../utils";
import { DrawerHelper } from "../../utils/drawer-helper";
import { Config } from "../../config";

@Component({
  selector: "app-appointments",
  templateUrl: "./appointments.component.html",
  styleUrls: ["./appointments.component.scss"]
})
export class AppointmentsComponent implements OnInit {
  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit() {}
  logout() {
    this.dataService.logout().then(() => {
      this.router.navigate(["login"], <any>{ clearHistory: true });
    });
  }
}
