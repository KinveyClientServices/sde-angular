import { Component, OnInit, NgZone } from "@angular/core";
import { DataService } from "../data.service";
import { DrawerHelper } from "../utils/drawer-helper";
import { Router } from "../utils";
import * as Kinvey from "kinvey-nativescript-sdk";

import { Config } from "../config";
@Component({
  selector: "app-tasks",
  templateUrl: "./tasks.component.html",
  styleUrls: ["./tasks.component.scss"]
})
export class TasksComponent implements OnInit {
  items;
  title: string;
  constructor(
    private service: DataService,
    private router: Router,
    private zone: NgZone
  ) {}

  ngOnInit() {
    console.log("ON INIT TASKS");
    this.title = Config.tasksPageTitle;
    this.service.getTasks().subscribe(data => {
      this.zone.run(() => {
        this.items = data[0];
        console.log("ITEMS:", this.items)
      });
    });
  }
  onDrawerButtonTap(): void {
    DrawerHelper.show();
  }
  addButtonTapped() {
      const dataStore = Kinvey.DataStore.collection('tracking');
  
      const subscription = dataStore.find()
      .subscribe((data: {}[]) => {
        this.zone.run(() => {
          this.items = data[0];
        });
      }, (e) => {
        console.log(e)
      });
    
  }
  async markDone(item) {
    await this.service.toggleTaskStatus(item);
  }
  viewContent() {
    this.router.navigate(["offline"]);
  }
}
