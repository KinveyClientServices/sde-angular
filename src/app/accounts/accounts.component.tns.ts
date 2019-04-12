import { Component, OnInit, ChangeDetectorRef, NgZone } from "@angular/core";
import { DataService } from "../data.service";
import { Config } from "../config";
import { DrawerHelper } from "../utils/drawer-helper";
import { Router } from "../utils";
import { SegmentedBarItem } from "tns-core-modules/ui/segmented-bar/segmented-bar";

@Component({
  selector: "app-accounts",
  templateUrl: "./accounts.component.html",
  styleUrls: ["./accounts.component.scss"]
})
export class AccountsComponent implements OnInit {
  items;
  title: any;
  myItems: any[];
  constructor(
    private service: DataService,
    private router: Router,
    private zone: NgZone
  ) {

    this.myItems = [];
    const item = new SegmentedBarItem();
    item.title = "Upcoming"
    this.myItems.push(item);
    const item2 = new SegmentedBarItem();
    item2.title = "Past"
    this.myItems.push(item2);
  }

  async ngOnInit() {
    this.title = Config.accountsPageTitle;
    await this.service.pullAccountData();
    this.service.getAccounts().subscribe(data => {
      this.zone.run(() => {
        this.items = data;
      });
    });
  }
  onDrawerButtonTap(): void {
    DrawerHelper.show();
  }

  goToDetails(item) {
    //console.log(item);
    this.router.navigate(["account-details", item._id]);
  }
  onSelectedIndexChange($event) {

  }
  chat() {
    this.router.navigate(["./chat"]);

  }
}
