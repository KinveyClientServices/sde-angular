import { Component, OnInit } from "@angular/core";
import { DrawerHelper } from "../utils/drawer-helper";
import { Config } from "../config";
import * as Kinvey from "kinvey-nativescript-sdk";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
  selector: "Home",
  templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
  logo: string;
  title: string;
  heading: string;
  fullName: string;
  constructor(
    private router: RouterExtensions
  ) {
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
  requestSpot(): void {
    // Promise.resolve(Kinvey.User.getActiveUser())
    // .then((user: Kinvey.User) => {
    //   if (user) {
    //     return user.update({
    //       fullname: this.fullName
    //     });
    //   }
    //   return user;
    // })
    // .then((user: Kinvey.User) => {
      this.router.navigate(["tasks/add-task"]);
    }
    lendSpot(){
      this.router.navigate(["accounts"]);

    }
  //   })
  //   .catch(() => {
  //     // ...
  //   });
  // }
}
