import { Component, OnInit, NgZone, ViewChild } from "@angular/core";
import { DataService } from "../data.service";
import { ActivatedRoute, Router } from "@angular/router";
import { RadSideDrawerComponent } from "nativescript-ui-sidedrawer/angular";


@Component({
  selector: "app-application-details",
  templateUrl: "./application-details.component.html",
  styleUrls: ["./application-details.component.scss"]
})
export class ApplicationDetailsComponent implements OnInit {
  id: any;
  @ViewChild(RadSideDrawerComponent)
  public drawerComponent: RadSideDrawerComponent;
  mortgageApplication: any;
  details: { key: string; value: any; }[];
  constructor(
    private service: DataService,
    private route: ActivatedRoute,
    private zone: NgZone
  ) { }



  ngOnInit() {
    console.log("init detssails");
    this.route.params.subscribe(params => {
      this.id = params["id"]; // (+) converts string 'id' to a number
      console.log(this.id);
      this.service.getSingleApplication(this.id).subscribe(app => {
        this.zone.run(() => {
          //console.log(app);
          this.mortgageApplication = app;
          this.details = [
            { key: "ID", value: this.mortgageApplication._id },
            { key: "DUE DATE", value: this.mortgageApplication.dueDate },
            { key: "TOTAL AMOUNT OF MORTGAGE LOAN REQUIRED", value: this.mortgageApplication.total },
            { key: "STATUS", value: this.mortgageApplication.status },
          ];
        });
      });

      // In a real app: dispatch action to load the details here.
    });
  }

  onOpenDrawerTap() {
    this.drawerComponent.sideDrawer.showDrawer();
  }
  onCloseDrawerTap() {
    this.drawerComponent.sideDrawer.closeDrawer();
  }

  async changeStatus(status: "Approved" | "Rejected") {
    this.mortgageApplication.status = status;
    await this.service.setApplicationStatus(this.mortgageApplication);
    this.drawerComponent.sideDrawer.closeDrawer();
    console.log("saved");
  }
  getStatusColor(status) {
    if (status == "Approved") {
      return "#00880A";
    } else if (status == "Rejected") {
      return "#DDAA00";
    } else {
      return "#D63100";
    }
  }
}
