import { Component, OnInit, NgZone } from "@angular/core";
import { DataService } from "../data.service";
import { DrawerHelper } from "../utils/drawer-helper";
import { Config } from "../config";


@Component({
  selector: "app-offline",
  templateUrl: "./offline.component.html",
  styleUrls: ["./offline.component.scss"]
})
export class OfflineComponent implements OnInit {
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
  constructor() {
    // Use the component constructor to inject providers.
  }

  ngOnInit(): void {
    this.title = Config.offlinePageTitle;
    // Init your component properties here.
  }
  onDrawerButtonTap(): void {
    DrawerHelper.show();
  }

}
