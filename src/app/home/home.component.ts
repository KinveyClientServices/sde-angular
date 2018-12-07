import { Component, OnInit } from "@angular/core";
import { DrawerHelper } from "../utils/drawer-helper";
import { Config } from "../config";
import { DataService } from "../data.service";
import { Router } from "../utils";

@Component({
  selector: "Home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  logo: string;
  title: string;
  heading: string;
  userPic: string;
  userName: string;
  profile: any;
  constructor(private service: DataService, private router: Router) {
    // Use the component constructor to inject providers.
  }

  ngOnInit() {
    this.logo = "https://www.desktopbackground.org/p/2012/07/19/423367_anime-scenery-wallpapers-tumblr-hd-cool-7-hd-wallpapers_1366x768_h.jpg"
    this.title = "Profile";

    this.heading = Config.homePageHeading;
    // Init your component properties here.
  }
  goToDetails() {
    this.router.navigate(["tasks"]);
  }
  goToMessages() {
    this.router.navigate(["files"]);
  }

  onDrawerButtonTap(): void {
    DrawerHelper.show();
  }
}
