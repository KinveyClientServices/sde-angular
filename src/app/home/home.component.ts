import { Component, OnInit, ChangeDetectorRef, NgZone } from "@angular/core";
import { DrawerHelper } from "../utils/drawer-helper";
import { Config } from "../config";
import { DataService } from "../data.service";

@Component({
  selector: "Home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  logo: string;
  title: string;
  heading: string;
  posts: any = [];
  constructor(private service: DataService, private zone: NgZone) {
    // Use the component constructor to inject providers.
  }

  async ngOnInit() {
    this.logo = Config.logo;
    this.title = Config.homePageTitle;
    this.heading = Config.homePageHeading;
    console.log("before");
    try {
      let data = await this.service.getMyFeed();
      console.log("after");
      console.log(data);
      this.zone.run(() => {
        this.posts = data;
      });
    } catch (err) {
      console.log("errrr");
      console.log(err);
    }

    // Init your component properties here.
  }

  onDrawerButtonTap(): void {
    DrawerHelper.show();
  }
}
