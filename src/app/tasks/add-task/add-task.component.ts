import { Component, OnInit } from "@angular/core";
import { DataService } from "../../data.service";
import { DatePicker } from "tns-core-modules/ui/date-picker";

import { Router } from "../../utils";
import { Config } from "../../config";

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
  startDate;
  endDate
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

onStartDateChanged(args) {
  // console.log("Date New value: " + args.value);
  // console.log("Date value: " + args.oldValue);
  this.startDate = args.value;
}

onStartDayChanged(args) {
    // console.log("Day New value: " + args.value);
    // console.log("Day Old value: " + args.oldValue);
    this.startDate = args.value;
}

onStartMonthChanged(args) {
    // console.log("Month New value: " + args.value);
    // console.log("Month Old value: " + args.oldValue);
    this.startDate = args.value;
}

onStartYearChanged(args) {
    // console.log("Year New value: " + args.value);
    // console.log("Year Old value: " + args.oldValue);
    this.startDate = args.value;
}

  onDateChanged(args) {
      // console.log("Date New value: " + args.value);
      // console.log("Date value: " + args.oldValue);
      this.endDate = args.value;
  }

  onDayChanged(args) {
      // console.log("Day New value: " + args.value);
      // console.log("Day Old value: " + args.oldValue);
      this.endDate = args.value;
  }

  onMonthChanged(args) {
      // console.log("Month New value: " + args.value);
      // console.log("Month Old value: " + args.oldValue);
      this.endDate = args.value;
  }

  onYearChanged(args) {
      // console.log("Year New value: " + args.value);
      // console.log("Year Old value: " + args.oldValue);
      this.endDate = args.value;
  }

  async save() {
    // const dataStore = Kinvey.DataStore.collection('availableSpots');
    console.log("here");
  
    this.service.dates = {"startDate": this.startDate, "endDate": this.endDate};

    // Promise.resolve(Kinvey.User.getActiveUser())
    // .then((user: Kinvey.User) => {
    //   // if (user) {
    //   //   console.log("prettyname: ", this.item.prettyname)
    //   //   return user.update({
    //   //     startDate: this.email,
    //   //     endDate: this.item.prettyname,
    //   //     user: this.item._downloadURL
    //   //   });
    //   // }
    //   console.log("USER: ", user.data.username)
    //   return user;
    // })
    // .then((user: Kinvey.User) => {
    //   //this.router.navigate(["products"]);
    //   console.log("Service Dates: ", this.service.dates)

    // })
    // .catch((e) => {
    //   console.log(e)
    // });

    this.router.navigate(["products"]);
  }
  back() {
    (<any>this.router).back();
  }
}
