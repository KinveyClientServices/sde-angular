import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import { DrawerHelper } from "../utils/drawer-helper";
import { Observable } from "rxjs";
import { Config } from "../config";
import { Router } from "../utils";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"]
})
export class ProductsComponent implements OnInit {
  items: Observable<any>;
  title: string;
  constructor(private service: DataService, private router: Router) {}

  ngOnInit() {
    this.items = this.service.getItems();
    this.title =
      Config.collectionName.charAt(0).toUpperCase() +
      Config.collectionName.slice(1);
  }
  onDrawerButtonTap(): void {
    DrawerHelper.show();
  }
  gotoDetails(item) {
    this.service.selectedProduct = item;
    this.router.navigate(["products/product-details"]);
  }

  refresh() {
    this.items = this.service.getItems();
  }
}
