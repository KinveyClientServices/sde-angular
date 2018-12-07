import { Component, OnInit } from "@angular/core";
import { DataService } from "../../data.service";

import { Router } from "../../utils";
import { Config } from "../../config";
//import * as Calendar from "nativescript-calendar";


@Component({
  selector: "app-add-task",
  templateUrl: "./add-task.component.html",
  styleUrls: ["./add-task.component.scss"]
})
export class AddTaskComponent implements OnInit {
  name;
  duedate = new Date(new Date().getTime() + (60 * 60 * 1000));
  title: string;

  constructor(private service: DataService, private router: Router) { }

  ngOnInit() {
    this.title = Config.addTaskPageTitle;
    console.log(this.duedate.toString());
    console.log(new Date(new Date().getTime() + (60 * 60 * 1000)));
  }

  async save() {
    console.log("here");
    console.log(this.name);
    console.log(this.duedate.toLocaleDateString());
    const myTask = {
      name: this.name,
      duedate: this.duedate.toLocaleDateString()
    };
    await this.service.saveTask(myTask);
    this.addToCalendar(myTask);
    (<any>this.router).back();
  }
  addToCalendar(myTask) {
    let end = new Date(this.duedate);
    end.setHours(end.getHours() + 1);

    var options: any = {
      title: "Take: " + myTask.name,
      // Make sure these are valid JavaScript Date objects.
      // In this case we schedule an Event for now + 1 hour, lasting 1 hour.

      startDate: this.duedate,
      endDate: end
    };

  }
  back() {
    (<any>this.router).back();
  }
}
