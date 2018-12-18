import { Component, OnInit, NgZone } from "@angular/core";
import { DataService } from "../data.service";
import { DrawerHelper } from "../utils/drawer-helper";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  title = "Mortgage Applications";
  applications: any;
  isLoading: boolean;
  listLoaded: boolean;
  constructor(private zone: NgZone, private service: DataService) { }

  ngOnInit() {
    console.log("loadDasta");
    this.loadData();
  }
  onDrawerButtonTap(): void {
    DrawerHelper.show();
  }


  getStatusColor(status) {
    if (status == "Approved") {
      return "#00880A";
    } else if (status == "Pending") {
      return "#DDAA00";
    } else {
      return "#D63100";
    }
  }
  loadData() {
    this.service.getApplications().subscribe(data => {
      this.zone.run(() => {
        this.applications = data;
        this.isLoading = false;
        this.listLoaded = true;
      });
    });
  }
}
