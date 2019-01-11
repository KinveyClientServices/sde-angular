import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { DataService } from "../data.service";
import { Router } from "../utils";
import { ChatHelper } from "../utils/chat-helper";
import { Page } from "ui/page";
import { Config } from "../config";
import { DrawerHelper } from "../utils/drawer-helper";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";



declare var nativechat: any;
@Component({
  selector: "app-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.scss"]
})
export class LayoutComponent implements OnInit {
  username;
  gesturesEnabled;
  user;
  homePageTitle: string;
  productsPageTitle: string;
  tasksPageTitle: string;
  offlinePageTitle: string;
  mapPageTitle: string;
  filesPageTitle: string;
  arPageTitle: string;
  chatPageTitle: string;
  accountsPageTitle: string;
  homePageVisible: boolean;
  accountsPageVisible: boolean;
  productsPageVisible: boolean;
  tasksPageVisible: boolean;
  filesPageVisible: boolean;
  offlinePageVisible: boolean;
  mapPageVisible: boolean;
  chatPageVisible: boolean;
  arPageVisible: boolean;
  @ViewChild('sideDrawer') sideDrawerElement: ElementRef;
  sideDrawer: RadSideDrawer;
  title: string;

  constructor(
    private service: DataService,
    private router: Router,
    private page: Page
  ) {
    this.username = this.service.username;
    //this.page.actionBarHidden = true;
  }

  ngOnInit() {
    this.title = "home";
    this.sideDrawer = this.sideDrawerElement.nativeElement;
    ChatHelper.show();
    this.user = this.service.username;
    this.gesturesEnabled = this.service.isLoggedIn;


    this.homePageTitle = Config.homePageTitle;
    this.productsPageTitle = Config.productsPageTitle;
    this.accountsPageTitle = Config.accountsPageTitle;
    this.tasksPageTitle = Config.tasksPageTitle;
    this.filesPageTitle = Config.filesPageTitle;
    this.mapPageTitle = Config.mapPageTitle;
    this.offlinePageTitle = Config.offlinePageTitle;
    this.chatPageTitle = Config.chatPageTitle;
    this.arPageTitle = Config.arPageTitle;

    this.homePageVisible = Config.homePageVisible;
    this.productsPageVisible = Config.productsPageVisible;
    this.accountsPageVisible = Config.accountsPageVisible;
    this.tasksPageVisible = Config.tasksPageVisible;
    this.filesPageVisible = Config.filesPageVisible;
    this.mapPageVisible = Config.mapPageVisible;
    this.offlinePageVisible = Config.offlinePageVisible;
    this.chatPageVisible = Config.chatPageVisible;
    this.arPageVisible = Config.arPageVisible;
  }
  async logout() {
    await this.service.logout();
    this.router.navigate(["login"]);
  }
  goToSettings() {
    this.router.navigate(["settings"]);
    this.sideDrawer.closeDrawer();
  }
  onNavItemTap(navItemRoute: string): void {
    this.title = navItemRoute;
    this.router.navigate([navItemRoute]);
    this.sideDrawer.closeDrawer();
  }
  onDrawerButtonTap(): void {
    this.sideDrawer.showDrawer();
  }
}
