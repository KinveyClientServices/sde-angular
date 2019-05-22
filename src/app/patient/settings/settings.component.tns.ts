import { Component, OnInit } from "@angular/core";
import { DataService } from "../../data.service";
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
  async logout() {
    if (await confirm("Do you want to log out??")) {
      await this.dataService.logout();
      this.router.navigate(["login"], <any>{ clearHistory: true });
    }
  }

  onDrawerButtonTap(): void {}
}
