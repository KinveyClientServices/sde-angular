import { Component, OnInit } from "@angular/core";
import { DrawerHelper } from "../utils/drawer-helper";
import { Config } from "../config";
import { DataService } from "../data.service";
import { map } from "rxjs/operators/map";
import { Observable } from "rxjs";
import { GridDataResult } from "@progress/kendo-angular-grid";
import { State, process } from "@progress/kendo-data-query";

export class Inventory {
  _id: string;
  AssetTag: string;
  SubType: string;
  Make: string;
  Specs: string;
  Owner: string;
  Custodian: string;
  Location: string;
  Department: string;
  Status: string;
  LCR: boolean;
  Reported: boolean;
  Audit: boolean;
}

@Component({
  selector: "Home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  logo: string;
  title: string;
  heading: string;
  public gridData: any[];
  editDataItem: Inventory;
  isNew: boolean;
  public gridState: State = {
    sort: [],
    skip: 0,
    take: 10
  };
  public view: Observable<GridDataResult>;

  constructor(private service: DataService) {
    // Use the component constructor to inject providers.
  }

  async ngOnInit() {
    this.logo = Config.logo;
    this.title = Config.homePageTitle;
    this.heading = Config.homePageHeading;

    this.view = this.service
      .getInventory()
      .pipe(map(data => process(data, this.gridState)));
    // Init your component properties here.
  }

  onDrawerButtonTap(): void {
    DrawerHelper.show();
  }
  public addHandler() {
    console.log("adding");
    this.editDataItem = new Inventory();
    this.isNew = true;
  }
  public cancelHandler() {
    this.editDataItem = undefined;
  }
  public async saveHandler(inventory: Inventory) {
    await this.service.saveInventory(inventory, this.isNew);

    this.view = this.service
      .getInventory()
      .pipe(map(data => process(data, this.gridState)));

    this.editDataItem = undefined;
  }

  public onStateChange(state: State) {
    this.gridState = state;
    console.log("state has changed");

    this.view = this.service
      .getInventory()
      .pipe(map(data => process(data, this.gridState)));
  }

  public editHandler({ dataItem }) {
    console.log(dataItem);
    this.editDataItem = dataItem;
    this.isNew = false;
  }
  public async removeHandler({ dataItem }) {
    await this.service.removeInventory(dataItem);
    this.view = this.service
      .getInventory()
      .pipe(map(data => process(data, this.gridState)));
  }
}
