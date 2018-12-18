import { Component, OnInit, NgZone } from "@angular/core";
import { DataService } from "../data.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-application-details",
  templateUrl: "./application-details.component.html",
  styleUrls: ["./application-details.component.scss"]
})
export class ApplicationDetailsComponent implements OnInit {
  id: any;
  mortgageApplication: any;
  constructor(
    private service: DataService,
    private route: ActivatedRoute,
    private zone: NgZone
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params["id"]; // (+) converts string 'id' to a number
      console.log(this.id);
      this.service.getSingleApplication(this.id).subscribe(app => {
        this.zone.run(() => {
          console.log(app);
          this.mortgageApplication = app;
        });
      });

    });
  }
  async changeStatus(status: "Approved" | "Rejected") {
    this.mortgageApplication.status = status;
    await this.service.setApplicationStatus(this.mortgageApplication);
    console.log("saved");
  }
}
