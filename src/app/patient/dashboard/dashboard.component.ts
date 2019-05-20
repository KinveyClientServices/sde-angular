import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  items = [
    { title: "Steps", value: 5120, color: "#F15175" },
    { title: "kCal Burned", value: 230, color: "#FF9F40" },
    { title: "kCal Consumed", value: 800, color: "#6AB04C" },
    { title: "Hours Slept", value: 6, color: "#686DE0" }
  ];
  constructor() {}

  ngOnInit() {}
}
