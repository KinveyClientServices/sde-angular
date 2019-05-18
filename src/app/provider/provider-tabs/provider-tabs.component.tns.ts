import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-provider-tabs",
  templateUrl: "./provider-tabs.component.html",
  styleUrls: ["./provider-tabs.component.scss"]
})
export class ProviderTabsComponent implements OnInit {
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
            appointmentsTab: ["appointments"]
          }
        }
      ],
      { relativeTo: this.activeRoute }
    );
  }
}
