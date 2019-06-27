import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { DataService } from "../data.service";
import { DrawerHelper } from "../utils/drawer-helper";
import { Observable } from "rxjs";
import { Config } from "../config";
import { RouterExtensions } from "nativescript-angular/router";


@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"]
})
export class ProductsComponent implements OnInit {
  items;
  logo;
  title: string;

  public isVisible: boolean;
  constructor(private service: DataService, private cd: ChangeDetectorRef, private router: RouterExtensions) {}

  ngOnInit() {
    this.service.getItems().subscribe(data => {
      this.items = data;
      this.isVisible = this.items[0].haveSpot;
      console.log("Product Items", this.items[0].haveSpot)

      this.cd.detectChanges();
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
    this.router.navigate(["home"]);

  }
}
