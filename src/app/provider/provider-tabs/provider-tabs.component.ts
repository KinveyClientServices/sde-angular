import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-provider-tabs",
  templateUrl: "./provider-tabs.component.html",
  styleUrls: ["./provider-tabs.component.scss"]
})
export class ProviderTabsComponent implements OnInit {
  constructor(
    private routerExtension: Router,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    console.log("here");
  }
}
