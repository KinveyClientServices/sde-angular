import { Component, OnInit } from "@angular/core";
import { DataService } from "../../data.service";
import { Router } from "../../utils";
import { Page } from "tns-core-modules/ui/page/page";
class DataItem {
  constructor(public id: number, public name: string, public image: string) {}
}

@Component({
  selector: "app-patients",
  templateUrl: "./patients.component.html",
  styleUrls: ["./patients.component.scss"]
})
export class PatientsComponent implements OnInit {
  myItems: any[];
  counter: number;

  constructor(
    private dataService: DataService,
    private router: Router,
    private page: Page
  ) {
    //HACK needed for Android Action Bar Hidden On Master Page but not Details Page
    this.page.actionBarHidden = true;
  }

  ngOnInit() {
    this.myItems = [];
    this.counter = 0;
    for (var i = 0; i < 8; i++) {
      this.myItems.push(
        new DataItem(
          i,
          "Ignacio Fuentes",
          "https://2.gravatar.com/avatar/7fc56bb23fe5236b432b5b91597109a1?s=160"
        )
      );
      this.counter = i;
    }
  }
  async logout() {
    if (await confirm("Do you want to log out??")) {
      await this.dataService.logout();
      this.router.navigate(["login"], <any>{ clearHistory: true });
    }
  }
  onItemTap($event) {
    console.log("Hello item");
    //this.router.navigate(["provider/patients/patient/1"]);
  }
}
