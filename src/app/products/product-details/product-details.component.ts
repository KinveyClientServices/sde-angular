import { Component, OnInit } from "@angular/core";
import { DataService } from "../../data.service";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.scss"]
})
export class ProductDetailsComponent implements OnInit {
  item: any;

  constructor(private service: DataService) {}

  ngOnInit() {
    this.item = this.service.selectedProduct;
  }
  async setStatus(status) {
    console.log(status);
    await this.service.setStatus(this.item, status);
  }
}
