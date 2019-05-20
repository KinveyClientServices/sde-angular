import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-tabs",
  templateUrl: "./tabs.component.html",
  styleUrls: ["./tabs.component.scss"]
})
export class TabsComponent implements OnInit {
  constructor(
    private routerExtension: RouterExtensions,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    console.log("here");
    this.routerExtension.navigate(
      [
        {
          outlets: {
            dashboardTab: ["dashboard"],
            findDoctorTab: ["find-doctor"],
            appointmentsTab: ["appointments"],
            telemedicineTab: ["telemedicine"],
            settingsTab: ["settings"]
          }
        }
      ],
      { relativeTo: this.activeRoute }
    );
  }
}
