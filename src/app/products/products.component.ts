import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { DataService } from "../data.service";
import { DrawerHelper } from "../utils/drawer-helper";
import { Observable } from "rxjs";
import { Config } from "../config";
import { RouterExtensions } from "nativescript-angular/router";
import * as Kinvey from "kinvey-nativescript-sdk";


@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"]
})
export class ProductsComponent implements OnInit {
  items;
  logo;
  title: string;
  loaded = false;
  spotAvailable;
  public isVisible: boolean;
  constructor(private service: DataService, private cd: ChangeDetectorRef, private router: RouterExtensions) {}

  ngOnInit() {
    const dataStore = Kinvey.DataStore.collection('availableSpots', Kinvey.DataStoreType.Network);

    const query = new Kinvey.Query();
    query.equalTo("startDate", this.service.dates.startDate).and().equalTo("endDate", this.service.dates.endDate);
    dataStore.find(query)
      .subscribe(data => {
        this.items = data;
        this.isVisible = this.items[1].haveSpot;
        this.spotAvailable = this.items[0][0];
        console.log("DATA: ", this.items[0][0])
      }, (error) => {
        console.log("Error: ", error)
      }, () => {
        this.loaded = true; 
      });
    this.title = Config.productsPageTitle;
    this.logo = Config.logo
  }
  onDrawerButtonTap(): void {
    DrawerHelper.show();
  }

  getNotify(){

  }
  goHome() {
    // const dataStore = Kinvey.DataStore.collection('availableSpots', Kinvey.DataStoreType.Network);
    // console.log("ID: ", this.spotAvailable._id)
    // const promise = dataStore.removeById(this.spotAvailable._id)
    // .then((result: {}) => {
    //   this.router.navigate(["home"]);
    // })
    // .catch((error) => {
    //   console.log(error)
    // });
    this.router.navigate(["home"]);

  }
}
