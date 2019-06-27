import { Component, OnInit } from "@angular/core";
import { DataService } from "../../data.service";
import { DatePicker } from "tns-core-modules/ui/date-picker";

import { Router } from "../../utils";
import { Config } from "../../config";
import * as Kinvey from "kinvey-nativescript-sdk";

@Component({
  selector: "app-add-task",
  templateUrl: "./add-task.component.html",
  styleUrls: ["./add-task.component.scss"]
})
export class AddTaskComponent implements OnInit {
  item;
  prettyname;
  email;
  _downloadURL;
  title: string;
  logo: string;

  constructor(private service: DataService, private router: Router) {
    this.item = this.service.selectedFile;
  }

  ngOnInit() {
    this.title = Config.addTaskPageTitle;
    this.logo = Config.logo;
  }

  onPickerLoaded(args) {
    let datePicker = <DatePicker>args.object;

    datePicker.year = 2019;
    datePicker.month = 6;
    datePicker.day = 27;
    datePicker.minDate = new Date(2019, 6, 27);
    datePicker.maxDate = new Date(2020, 7, 12);
}

  onDateChanged(args) {
      console.log("Date New value: " + args.value);
      console.log("Date value: " + args.oldValue);
  }

  onDayChanged(args) {
      console.log("Day New value: " + args.value);
      console.log("Day Old value: " + args.oldValue);
  }

  onMonthChanged(args) {
      console.log("Month New value: " + args.value);
      console.log("Month Old value: " + args.oldValue);
  }

  onYearChanged(args) {
      console.log("Year New value: " + args.value);
      console.log("Year Old value: " + args.oldValue);
  }

  async save() {
    const that = this;
    console.log("here");
    // Promise.resolve(Kinvey.User.getActiveUser())
    // .then((user: Kinvey.User) => {
    //   if (user) {
    //     console.log("prettyname: ", this.item.prettyname)
    //     return user.update({
    //       email: this.email,
    //       prettyname: this.item.prettyname,
    //       _downloadURL: this.item._downloadURL
    //     });
    //   }
    //   return user;
    // })
    // .then((user: Kinvey.User) => {
    //   this.router.navigate(["files"]);

    // })
    // .catch(() => {
    //   // ...
    // });
    this.router.navigate(["products"]);
  }
  back() {
    (<any>this.router).back();
  }
}
