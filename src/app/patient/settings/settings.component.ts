import { Component, OnInit } from "@angular/core";
import { DataService } from "../../data.service";
import { Router } from "../../utils";
import { Config } from "../../config";

@Component({
  selector: "app-settings",
  templateUrl: "./settings.component.html",
  styleUrls: ["./settings.component.scss"]
})
export class SettingsComponent implements OnInit {
  title: string;
  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    // Init your component properties here.
  }
  logout() {
    this.dataService.logout().then(() => {
      this.router.navigate(["login"], <any>{ clearHistory: true });
    });
  }

  onDrawerButtonTap(): void {}
}
