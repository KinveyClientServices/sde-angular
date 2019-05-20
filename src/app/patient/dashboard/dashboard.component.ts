import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  items = [
    {
      title: "Steps",
      icon: "\uf554",
      value: 5120,
      color: "#F15175",
      angle: 180,
      subItems: {
        steps: 5.152,
        goal: "10 000",
        distance: "4.26 Km"
      }
    },

    {
      title: "kCal Burned",
      icon: "\uf46a",
      value: 230,
      color: "#FF9F40",
      angle: 320,
      subItems: {
        burned: 230,
        goal: 600
      }
    },
    {
      title: "kCal Consumed",
      icon: "\uf2e7",
      value: 800,
      color: "#6AB04C",
      angle: 220,
      subItems: {
        steps: 100,
        goal: 120,
        distance: "4.26 Km"
      }
    },
    {
      title: "Hours Slept",
      icon: "\uf755",
      value: 6,
      color: "#686DE0",
      angle: 340,
      subItems: {
        steps: 100,
        goal: 120,
        distance: "4.26 Km"
      }
    }
  ];
  constructor() {}

  ngOnInit() {}
}
