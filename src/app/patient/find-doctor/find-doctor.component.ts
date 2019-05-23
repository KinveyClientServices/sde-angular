import { Component, OnInit } from "@angular/core";
class Doctor {
  constructor(public id: number, public name: string, public image: string) {}
}
@Component({
  selector: "app-find-doctor",
  templateUrl: "./find-doctor.component.html",
  styleUrls: ["./find-doctor.component.scss"]
})
export class FindDoctorComponent implements OnInit {
  selected = 0;

  images = [1, 2, 3];
  tickets: any[];
  counter: number;
  doctors: any[];
  constructor() {}

  ngOnInit() {
    this.tickets = ["Measles", "Influenza", "upset", "big Concern"];
    this.doctors = [];
    this.counter = 0;
    for (var i = 0; i < 8; i++) {
      this.doctors.push(
        new Doctor(
          i,
          "Dr. John Doe",
          "https://2.gravatar.com/avatar/7fc56bb23fe5236b432b5b91597109a1?s=160"
        )
      );
      this.counter = i;
    }
    this.counter = 0;
  }
  markSelected(v) {
    console.log(v);
    this.selected = v;
  }
}
