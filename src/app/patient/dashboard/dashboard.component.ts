import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  selected = 1;
  markSelected(v) {
    console.log(v);
    this.selected = v;
  }
  dashboard = {
    notifications: [
      { badge: 2, text: "Upcoming Appointments" },
      { badge: 3, text: "Current Medications" }
    ],
    tips: [
      {
        text: "Free Physical Exam at John Muir Co.",
        subText: "Schedule appointment required",
        icon: "fa-diagnoses"
      },
      {
        text: "Flu Season is Here",
        subText: "Schedule an appointment with your PCP to get your flu shot",
        icon: "fa-syringe"
      },
      {
        text: "Colon Cancer Screening",
        subText:
          "It’s been 9 months since your last colon screening. Schedule an appointment now.",
        icon: "fa-users-medical"
      }
    ],

    items: [
      {
        title: "Steps",
        icon: "fa-walking",
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
        icon: "fa-burn",
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
        icon: "fa-utensils",
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
        icon: "fa-moon-stars",
        value: 6,
        color: "#686DE0",
        angle: 340,
        subItems: {
          steps: 100,
          goal: 120,
          distance: "4.26 Km"
        }
      }
    ],
    summary: [
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
    ],
    expenses: [
      {
        title: "Bloodwork",
        value: 300,
        color: "#F15175",
        angle: 80,
        subItems: {
          used: 300,
          planned: 2300
        }
      },
      {
        title: "Doctor Visit",
        value: 1300,
        color: "#0076FF",
        angle: 180,
        subItems: {
          used: 1300,
          planned: 3000
        }
      }
    ]
  };

  ngOnInit() {}
}
