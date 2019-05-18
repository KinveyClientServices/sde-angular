import { Component, OnInit } from "@angular/core";
import { DataService } from "../../data.service";
import { DrawerHelper } from "../../utils/drawer-helper";
import { Config } from "../../config";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
  selector: "app-settings",
  templateUrl: "./settings.component.html",
  styleUrls: ["./settings.component.scss"]
})
export class SettingsComponent implements OnInit {
  title: string;
  constructor(
    private dataService: DataService,
    private router: RouterExtensions
  ) {}

  ngOnInit(): void {
    // Init your component properties here.
    this.title = Config.settingsPageTitle;
  }
  logout() {
    this.dataService.logout().then(() => {
      this.router.navigate(["login"], { clearHistory: true });
    });
  }

  onDrawerButtonTap(): void {
    DrawerHelper.show();
  }
}
