import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { DataService } from "../../data.service";

import { Router } from "../../utils";
import { Config } from "../../config";
import { ActivatedRoute } from "@angular/router";

export interface Name {
  value: string;
  viewValue: string;
}

@Component({
  selector: "app-add-task",
  templateUrl: "./add-task.component.html",
  styleUrls: ["./add-task.component.scss"]
})
export class AddTaskComponent implements OnInit {
  action;
  date;
  sub: any;
  id: any;
  items;
  entity;
  title: string;
  goalTask: any;
  names: Name[] = [
    {value: 'Job Interview', viewValue: 'Job Interview'},
    {value: 'Visited Doctor', viewValue: 'Visited Doctor'},
    {value: 'Employment status changed', viewValue: 'Employment status changed'},
    {value: 'Attended Exit Counseling', viewValue: 'Attended Exit Counseling'},
    {value: 'Transition Plan sync up', viewValue: 'Transition Plan sync up'}


  ];

  constructor(private service: DataService, private router: Router, private route: ActivatedRoute, private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.title = Config.addTaskPageTitle;

    this.sub = this.route.params.subscribe(params => {
      this.id = params["id"]; // (+) converts string 'id' to a number
      console.log(this.id);
      // In a real app: dispatch action to load the details here.
    });
  }

  async save() {
    console.log("here");
    console.log(this.action);
    console.log(this.date.toLocaleDateString());
    await this.service.saveTask({
      action: this.action,
      duedate: this.date.toLocaleDateString()
    });
    this.router.navigate(["tasks"]);
  }
  back() {
    (<any>this.router).back();
  }
  async saveTask(){
    console.log("Saved!")
    console.log(this.action);
    console.log(this.date);
    if (this.goalTask === 'Employment status changed') {

      let entity = {
        "_id": "5cb90a64cd7c5c1f23e45543",
        "goalStatus": 3,
        "goal": "Secure Employment",
        "clientID": "556891cb6f2f8f437516418a",
      }
      await this.service.updateAccount(entity);
    }

    if (this.goalTask === 'Job Interview') {
      let entity = {
        "_id": "5cb90a64cd7c5c1f23e45543",
        "goalStatus": 2,
        "goal": "Secure Employment",
        "clientID": "556891cb6f2f8f437516418a",
      }

      await this.service.updateAccount(entity);
    }
    await this.service.saveTask({
      clientID: this.id,
      action: this.action,
      duedate: this.date,
      goalTask: this.goalTask
    });
    this.router.navigate(["tasks/", this.id]);
  }
}
