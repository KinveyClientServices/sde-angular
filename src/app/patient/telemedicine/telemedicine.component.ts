import { Component, OnInit } from "@angular/core";
class Ticket {
  constructor(public id: number, public name: string) {}
}
@Component({
  selector: "app-telemedicine",
  templateUrl: "./telemedicine.component.html",
  styleUrls: ["./telemedicine.component.scss"]
})
export class TelemedicineComponent implements OnInit {
  selected = 0;

  images = [1, 2, 3];
  tickets: any[];
  counter: number;
  constructor() {}

  ngOnInit() {
    this.tickets = ["Measles", "Influenza", "upset", "big Concern"];
    this.counter = 0;
  }
  markSelected(v) {
    console.log(v);
    this.selected = v;
  }
}
