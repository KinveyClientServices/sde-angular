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
      icon: String.fromCharCode(parseInt("f554", 16)),
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
      icon: String.fromCharCode(parseInt("f46a", 16)),
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
      icon: String.fromCharCode(parseInt("f2e7", 16)),
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
      icon: String.fromCharCode(parseInt("f755", 16)),
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
