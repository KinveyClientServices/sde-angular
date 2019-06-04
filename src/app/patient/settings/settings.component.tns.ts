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
  selected = 0;
  myItems: any[];
  references: { name: string }[];

  constructor(
    private dataService: DataService,
    private router: RouterExtensions
  ) {}

  ngOnInit(): void {
    // Init your component properties here.
    this.myItems = [
      {
        name: "Office Visit Co-pay",
        amount: 20
      },
      {
        name: "Specialist Care Co-pay",
        amount: 30
      },
      {
        name: "Individual Deductible",
        amount: 2983.57
      }
    ];
    this.references = [
      {
        name: "Office Visit Co-pay"
      },
      {
        name: "Estimate of Benefits"
      }
    ];
  }
  async logout() {
    if (await confirm("Do you want to log out??")) {
      await this.dataService.logout();
      this.router.navigate(["login"], <any>{ clearHistory: true });
    }
  }
  markSelected(v) {
    console.log(v);
    this.selected = v;
  }

  onDrawerButtonTap(): void {}
}
