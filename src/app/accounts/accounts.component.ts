import { Component, OnInit, ChangeDetectorRef, NgZone } from "@angular/core";
import { DataService } from "../data.service";
import { Config } from "../config";
import { DrawerHelper } from "../utils/drawer-helper";
import { Router } from "../utils";

@Component({
  selector: "app-accounts",
  templateUrl: "./accounts.component.html",
  styleUrls: ["./accounts.component.scss"]
})
export class AccountsComponent implements OnInit {
  items;
  title: any;
  constructor(
    private service: DataService,
    private router: Router,
    private zone: NgZone
  ) {}

  async ngOnInit() {
    this.title = Config.accountsPageTitle;
    // await this.service.pullAccountData();
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

  viewTasks(item) {
    event.preventDefault();
    console.log("viewTasks");
    this.router.navigate(["tasks/:id", item._id]);
  }
}
