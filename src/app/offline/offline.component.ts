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
  items;
  title: any;
  constructor(private service: DataService, private zone: NgZone) {}

  async ngOnInit() {
    this.title = Config.offlinePageTitle;
    await this.service.pullAccountData();
    this.service.getSyncAccounts().subscribe(data => {
      this.zone.run(() => {
        this.items = data;
      });
    });
  }
  onDrawerButtonTap(): void {
    DrawerHelper.show();
  }

  async addMe() {
    var myaccounts = [];
    for (var i = 0; i < 1; i++) {
      const thisaccount = {
        trackingNum: "Tracking #213HH854672",
        autogen: true,
        ShippingAddress: "2199 St Jacques St, Montreal, QC H3J 2T6",
        eta: "Estimated Delivery Date: 20/6/2019"
      };
      myaccounts.push(thisaccount);
    }
    await this.service.addSyncAccounts(myaccounts);
    this.service.getSyncAccounts().subscribe(data => {
      this.zone.run(() => {
        this.items = data;
        alert("Shipments added");
      });
    });
  }

  async syncMe() {
    console.log("syncng");
    await this.service.pushSyncAccountData();
    this.service.getSyncAccounts().subscribe(data => {
      this.zone.run(() => {
        this.items = data;
        alert("all sync done");
      });
    });
  }
}
