import { Component, OnInit, ChangeDetectorRef, NgZone } from "@angular/core";
import { DataService } from "../data.service";
import { Config } from "../config";
import { DrawerHelper } from "../utils/drawer-helper";
import { Router } from "../utils";
import { DatePicker } from "tns-core-modules/ui/date-picker";
import * as Kinvey from "kinvey-nativescript-sdk";


@Component({
  selector: "app-accounts",
  templateUrl: "./accounts.component.html",
  styleUrls: ["./accounts.component.scss"]
})
export class AccountsComponent implements OnInit {
  items;
  title: any;
  startDate;
  endDate;
  user;
  parkingSpot;
  constructor(
    private service: DataService,
    private router: Router,
    private zone: NgZone
  ) {}

  async ngOnInit() {
    this.title = Config.accountsPageTitle;
    this.user = Kinvey.User.getActiveUser();
    console.log("USER: ", this.user)

    await this.service.pullAccountData();
    this.service.getAccounts().subscribe(data => {
      this.zone.run(() => {
        this.items = data;
      });
    });
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


  onDrawerButtonTap(): void {
    DrawerHelper.show();
  }

  goToDetails(item) {
    //consol e.log(item);
    this.router.navigate(["account-details", item._id]);
  }

  formatDate(date){
    return date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear()
  }

  submitDates(){
    const dataStore = Kinvey.DataStore.collection('availableSpots');
    console.log("USER: ", this.user)
    const uploadData = {
      startDate: new Date(this.startDate),
      spotOwnerId: this.user.data._id,
      spotOwnerUsername: this.user.data.username,
      endDate: this.endDate,
      parkingSpot: this.user.data.parkingSpot
    }
    const promise = dataStore.save(uploadData)
      .then(function(entity: {}) {
      })
      .catch(function(e) {
        console.log(e)
      });
    this.router.navigate(["tasks"]);

  }
}
