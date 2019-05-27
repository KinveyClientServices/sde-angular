import { Component, OnInit } from "@angular/core";
import { DrawerHelper } from "../utils/drawer-helper";
import { Config } from "../config";

@Component({
  selector: "Home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  logo: string;
  title: string;
  heading: string;
  constructor() {
    // Use the component constructor to inject providers.
  }

  ngOnInit(): void {
    this.logo = Config.logo;
    this.title = Config.homePageTitle;
    this.heading = Config.homePageHeading;
    // Init your component properties here.
  }

  onDrawerButtonTap(): void {
    DrawerHelper.show();
  }
}
