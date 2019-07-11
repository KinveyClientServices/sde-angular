import { Component, OnInit, NgZone } from "@angular/core";
import { DataService } from "../data.service";
import { DrawerHelper } from "../utils/drawer-helper";
import { Router } from "../utils";
import { Config } from "../config";
import * as Kinvey from "kinvey-nativescript-sdk";
import { async } from "@angular/core/testing";


@Component({
  selector: "app-tasks",
  templateUrl: "./tasks.component.html",
  styleUrls: ["./tasks.component.scss"]
})
export class TasksComponent implements OnInit {
  items;
  title: string;
  startDate;
  endDate;
  constructor(
    private service: DataService,
    private router: Router,
    private zone: NgZone
  ) {}

  ngOnInit() {
    console.log("ON INIT TASKS");
    this.title = Config.tasksPageTitle;
    this.service.getTasks().subscribe(data => {
      data.map(
        x => {
          console.log("x.startDate", x.startDate)
          x.startDate = this.formatDate(x.startDate)
          x.endDate = this.formatDate(x.endDate)

        })
      //var resultSoFar, i
      var i = data.length

      // data.startDate = this.formatDate(data.startDate)
      // data.endDate = this.formatDate(data.endDate)
      this.zone.run(() => {
        this.items = data;
        // console.log("this.items.startDate: ", this.items.startDate)
        // this.startDate = this.formatDate(this.items.startDate)
        // this.endDate = this.formatDate(this.items.endDate)

      });
    });
  }

  formatDate(dates){
    console.log("DATE: ", dates)
    let date = new Date(dates)
    // let promise = new Promise((resolve, reject) => {
      return date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
    // })
    // let result = await promise;
  }


  
  // formatDate(date){
  //   console.log("DATE: ", date)
  //   return date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear()
  // }

  onDrawerButtonTap(): void {
    DrawerHelper.show();
  }
  addButtonTapped() {
    this.router.navigate(["tasks/add-task"]);
  }
  async markDone(item) {
    //await this.service.toggleTaskStatus(item);
  }
  refresh(): void {
    const dataStore = Kinvey.DataStore.collection('availableSpots', Kinvey.DataStoreType.Network);

    const subscription = dataStore.find()
    .subscribe((entities: {}[]) => {
      this.zone.run(() => {
        this.items = entities;
      });
    }, (e) => {
      console.log(e)
    });
  }
}
