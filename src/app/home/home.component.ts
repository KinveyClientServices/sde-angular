import { Component, OnInit, NgZone } from "@angular/core";
import { DataService } from "../data.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  title = "acme-manager";
  applications: any;
  constructor(private zone: NgZone, private service: DataService) { }

  ngOnInit() {
    console.log("loadData");
    this.loadData();
  }
  loadData() {
    this.service.getApplications().subscribe(data => {
      this.zone.run(() => {
        this.applications = data;
      });
    });
  }
}
