import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"]
})
export class ProductsComponent implements OnInit {
  items;
  constructor(private service: DataService) {}

  ngOnInit() {
    this.items = this.service.getProducts();
  }
  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
  }
}
