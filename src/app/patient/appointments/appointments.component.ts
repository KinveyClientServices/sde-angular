import { Component, OnInit } from "@angular/core";
class DataItem {
  constructor(public id: number, public name: string, public image: string) {}
}

@Component({
  selector: "app-appointments",
  templateUrl: "./appointments.component.html",
  styleUrls: ["./appointments.component.scss"]
})
export class AppointmentsComponent implements OnInit {
  myItems: any[];
  counter: number;
  constructor() {}

  ngOnInit() {
    this.myItems = [];
    this.counter = 0;
    for (var i = 0; i < 8; i++) {
      this.myItems.push(
        new DataItem(
          i,
          "Dr. John Doe",
          "https://2.gravatar.com/avatar/7fc56bb23fe5236b432b5b91597109a1?s=160"
        )
      );
      this.counter = i;
    }
  }
}
