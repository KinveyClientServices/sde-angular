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
export class AppComponent implements OnInit {
  gesturesEnabled;
  user;
  homePageTitle: string;
  dashboardPageTitle: string;
  productsPageTitle: string;
  tasksPageTitle: string;
  offlinePageTitle: string;
  mapPageTitle: string;
  filesPageTitle: string;
  arPageTitle: string;
  chatPageTitle: string;
  accountsPageTitle: string;
  homePageVisible: boolean;
  dashboardPageVisible: boolean;
  accountsPageVisible: boolean;
  productsPageVisible: boolean;
  tasksPageVisible: boolean;
  filesPageVisible: boolean;
  offlinePageVisible: boolean;
  mapPageVisible: boolean;
  chatPageVisible: boolean;
  arPageVisible: boolean;

  constructor(private service: DataService, private router: Router) {}

  ngOnInit(): void {
    this.user = this.service.username;
    this.gesturesEnabled = this.service.isLoggedIn;

    this.homePageTitle = Config.homePageTitle;
    this.dashboardPageTitle = Config.dashboardPageTitle;
    this.productsPageTitle = Config.productsPageTitle;
    this.accountsPageTitle = Config.accountsPageTitle;
    this.tasksPageTitle = Config.tasksPageTitle;
    this.filesPageTitle = Config.filesPageTitle;
    this.mapPageTitle = Config.mapPageTitle;
    this.offlinePageTitle = Config.offlinePageTitle;
    this.chatPageTitle = Config.chatPageTitle;
    this.arPageTitle = Config.arPageTitle;

    this.homePageVisible = Config.homePageVisible;
    this.dashboardPageVisible = Config.dashboardPageVisible;
    this.productsPageVisible = Config.productsPageVisible;
    this.accountsPageVisible = Config.accountsPageVisible;
    this.tasksPageVisible = Config.tasksPageVisible;
    this.filesPageVisible = Config.filesPageVisible;
    this.mapPageVisible = Config.mapPageVisible;
    this.offlinePageVisible = Config.offlinePageVisible;
    this.chatPageVisible = Config.chatPageVisible;
    this.arPageVisible = Config.arPageVisible;
  }

  goToSettings() {
    this.router.navigate(["settings"]);
    DrawerHelper.hide();
  }

  onNavItemTap(navItemRoute: string): void {
    this.router.navigate([navItemRoute]);
    DrawerHelper.hide();
  }
}
