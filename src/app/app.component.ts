import { Component, OnInit } from "@angular/core";
import { Router } from "./utils";
import { DataService } from "./data.service";
import { DrawerHelper } from "./utils/drawer-helper";
import { Config } from "./config";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {

  constructor(private service: DataService, private router: Router) { }

}
