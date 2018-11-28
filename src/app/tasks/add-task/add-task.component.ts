import { Component, OnInit } from "@angular/core";
import { DataService } from "../../data.service";

import { Router } from "../../utils";
import { Config } from "../../config";
import * as Calendar from "nativescript-calendar";


@Component({
  selector: "app-add-task",
  templateUrl: "./add-task.component.html",
  styleUrls: ["./add-task.component.scss"]
})
export class AddTaskComponent implements OnInit {
  name;
  duedate;
  title: string;

  constructor(private service: DataService, private router: Router) { }

  ngOnInit() {
    this.title = Config.addTaskPageTitle;
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
    this.addToCalendar(myTask)
    this.router.navigate(["tasks"]);
  }
  addToCalendar(myTask) {
    var options: any = {
      title: "Take: " + myTask.name,
      // Make sure these are valid JavaScript Date objects.
      // In this case we schedule an Event for now + 1 hour, lasting 1 hour.
      startDate: new Date(new Date().getTime() + (60 * 60 * 1000)),
      endDate: new Date(new Date().getTime() + (2 * 60 * 60 * 1000))
    };



    Calendar.createEvent(options).then(
      function (createdId) {
        console.log("Created Event with ID: " + createdId);
      },
      function (error) {
        console.log("Error creating an Event: " + error);
      }
    );
  }
  back() {
    (<any>this.router).back();
  }
}
