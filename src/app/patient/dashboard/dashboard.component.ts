import { Component, OnInit } from "@angular/core";
import { DataService } from "~/app/data.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  dashboard: any = {};
  constructor(private service: DataService) {}
  selected = 0;
  markSelected(v) {
    console.log(v);
    this.selected = v;
  }

  async ngOnInit() {
    console.log("FETCHING DATAAAAAAAAAAAAAAAAAA-----------------------------");
    this.dashboard = await this.service.getDashboardData();
  }
}
