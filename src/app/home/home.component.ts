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
  public series: any[] = [{
    name: "India",
    data: [3.907, 7.943, 7.848, 9.284, 9.263, 9.801, 3.890, 8.238, 9.552, 6.855]
  }, {
    name: "Russian Federation",
    data: [4.743, 7.295, 7.175, 6.376, 8.153, 8.535, 5.247, -7.832, 4.3, 4.3]
  }, {
    name: "Germany",
    data: [0.010, -0.375, 1.161, 0.684, 3.7, 3.269, 1.083, -5.127, 3.690, 2.995]
  }, {
    name: "World",
    data: [1.988, 2.733, 3.994, 3.464, 4.001, 3.939, 1.333, -2.245, 4.339, 2.727]
  }];
  public categories: number[] = [2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011];
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
