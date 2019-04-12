import { Component, OnInit } from "@angular/core";
import { DrawerHelper } from "../utils/drawer-helper";
import { Config } from "../config";
import { Router } from "../utils";
import { openApp } from "nativescript-open-app";


@Component({
  selector: "Home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {

  logo: string;
  title: string;
  heading: string;
  categoricalSource: { Country: string, Amount: number, SecondVal: number, ThirdVal: number }[] = [
    { Country: "Monday", Amount: 15, SecondVal: 14, ThirdVal: 24 },
    { Country: "Tuesday", Amount: 13, SecondVal: 23, ThirdVal: 25 },
    { Country: "Wednesday", Amount: 24, SecondVal: 17, ThirdVal: 23 },
    { Country: "Thursday", Amount: 11, SecondVal: 19, ThirdVal: 24 },
    { Country: "Friday", Amount: 18, SecondVal: 8, ThirdVal: 21 }
  ];
  constructor(private router: Router) {
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
  navigate(to) {
    console.log(to);
    this.router.navigate([to]);
  }
  go() {
    openApp("doctor://");
  }
}
