import { Component, OnInit } from "@angular/core";
import { DataService } from "../../data.service";
import { Router } from "../../utils";
class DataItem {
  constructor(public id: number, public name: string) {}
}

@Component({
  selector: "app-patients",
  templateUrl: "./patients.component.html",
  styleUrls: ["./patients.component.scss"]
})
export class PatientsComponent implements OnInit {
  myItems: any[];
  counter: number;

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit() {}
}
