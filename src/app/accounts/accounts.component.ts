import { Component, OnInit, ChangeDetectorRef, NgZone } from "@angular/core";
import { DataService } from "../data.service";
import { Config } from "../config";
import { DrawerHelper } from "../utils/drawer-helper";
import { Router } from "../utils";
import * as dialogs from "tns-core-modules/ui/dialogs"

@Component({
  selector: "app-accounts",
  templateUrl: "./accounts.component.html",
  styleUrls: ["./accounts.component.scss"]
})
export class AccountsComponent implements OnInit {
  items;
  title: any;
  showLock
  constructor(
    private service: DataService,
    private router: Router,
    private zone: NgZone
  ) {}

  async ngOnInit() {
    this.title = Config.accountsPageTitle;
    //await this.service.getAccounts();
    this.service.getAccounts().subscribe(data => {
      // data.forEach(function(element) {
      //   if(element.owned === undefined) {
      //     element.owned = true;
      //   }
      // });
      this.zone.run(() => {
        this.items = data;
      });
    });
  }

  onDrawerButtonTap(): void {
    DrawerHelper.show();
  }

  isPDFowned() {

  }

  goToDetails(item) {
    this.service.selectedFile = item;
    //console.log(item.owned)
    if (!item.owned) {
      this.router.navigate(["account-details"]);
      console.log("true")

    }
    else if (item.owned && item.owned !== undefined) {
      dialogs.confirm({
        title: "This content is locked",
        message: "Do you want to purchase?",
        okButtonText: "Purchase Content",
        cancelButtonText: "Cancel",
        //neutralButtonText: "Neutral text"
    }).then(result => {
        // result argument is boolean
        console.log("Dialog result: " + result);
    });
    console.log("false")

    }
  }

  async syncMe() {
    console.log("syncng");
    //await this.service.getAccounts();
    this.service.getAccounts().subscribe(data => {
      this.zone.run(() => {
        this.items = data;
      });
    });
  }
}
