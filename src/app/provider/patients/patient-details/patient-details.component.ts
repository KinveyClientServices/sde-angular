import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-patient-details",
  templateUrl: "./patient-details.component.html",
  styleUrls: ["./patient-details.component.scss"]
})
export class PatientDetailsComponent implements OnInit {
  patient = {
    id: 1,
    name: "Ignacio Fuentes",
    image:
      "https://2.gravatar.com/avatar/7fc56bb23fe5236b432b5b91597109a1?s=160",
    patientData: [
      "MRN",
      "Marital Status",
      "First Name",
      "Last Name",
      "Nickname",
      "DOB",
      "SSN",
      "Sex",
      "Phone Number",
      "Street"
    ]
  };

  constructor() {}

  ngOnInit() {}
}
