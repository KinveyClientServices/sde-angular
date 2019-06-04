import { Component, OnInit } from "@angular/core";
import { DataService } from "~/app/data.service";
import { Router } from "~/app/utils";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  constructor(private service: DataService, private router: Router) {}
  selected = 0;
  markSelected(v) {
    console.log(v);
    this.selected = v;
  }
  notifications = [
    { badge: 2, text: "Upcoming Appointments" },
    { badge: 3, text: "Current Medications" }
  ];
  tips = [
    {
      text: "Free Physical Exam at John Muir Co.",
      subText: "Schedule appointment required",
      icon: "\uf470"
    },
    {
      text: "Flu Season is Here",
      subText: "Schedule an appointment with your PCP to get your flu shot",
      icon: "\uf48e"
    },
    {
      text: "Colon Cancer Screening",
      subText:
        "It’s been 9 months since your last colon screening. Schedule an appointment now.",
      icon: "\uf830"
    }
  ];

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
  summary = [
    { title: "Weight", value: "200", units: "Lbs", color: "#0076FF" },
    {
      title: "Blood Pressure",
      value: "119/67",
      units: "",
      color: "#F15175"
    },
    {
      title: "Total Cholesterol",
      value: "195",
      units: "mg/dL",
      color: "#6AB04C"
    }
  ];

  async logout() {
    await this.service.logout();
    this.router.navigate([""]);
  }

  ngOnInit() {}
}
