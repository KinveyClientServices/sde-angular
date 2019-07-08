import { Component, OnInit, NgZone } from "@angular/core";
import { DataService } from "../data.service";
import { DrawerHelper } from "../utils/drawer-helper";
import { Router } from "../utils";
import { Config } from "../config";
import * as Kinvey from "kinvey-nativescript-sdk";
import { CalendarEvent, CalendarEventsViewMode } from 'nativescript-ui-calendar';
import { Color } from "tns-core-modules/color/color";
import { Page } from "tns-core-modules/ui/page/page";


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
  onNavigatingTo;
  private _events: Array<CalendarEvent>;
  private _optionsParamName: string;
  private _eventsViewMode: CalendarEventsViewMode;
  
  constructor(
    private service: DataService,
    private router: Router,
    private zone: NgZone,
    private _page: Page
    ) {
    super();
        this._page.on("navigatingTo", this.onNavigatingTo, this);
        this._optionsParamName = "eventsViewMode";
        this._optionsService.paramName = this._optionsParamName;
        this.router = _router;
        this.navigationParameters = { selectedIndex: 0, paramName: this._optionsParamName, items: ["None", "Inline", "Popover (iPad only)"] };
    
    this._eventsViewMode = CalendarEventsViewMode.None;
    }
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


  onNavigatingTo(args) {
    if (args.isBackNavigation) {
        if (this._optionsService.paramName === this._optionsParamName) {
            switch (this._optionsService.paramValue) {
                case 0:
                    this.onNoneTap();
                    this.navigationParameters.selectedIndex = 0;
                    break;
                case 1:
                    this.onInlineTap();
                    this.navigationParameters.selectedIndex = 1;
                    break;
                case 2:
                    if (applicationModule.ios && platform.device.deviceType === "Tablet") {
                        this.onPopoverTap();
                        this.navigationParameters.selectedIndex = 2;
                    }
                    break;
                default:
                    break;
            }
        }
    }
}
//   getCalendarEvents(): Array<CalendarEvent> {
//     let now = new Date();
//     let startDate: Date,
//         endDate: Date,
//         items: CalendarEvent;
//     let colors: Array<Color> = [new Color(200, 188, 26, 214), new Color(220, 255, 109, 130), new Color(255, 55, 45, 255), new Color(199, 17, 227, 10), new Color(255, 255, 54, 3)];
//     let events: Array<CalendarEvent> = new Array<CalendarEvent>();
//     for (let i = 1; i < 10; i++) {
//         startDate = new Date(now.getFullYear(), now.getMonth(), i * 2, 1);
//         endDate = new Date(now.getFullYear(), now.getMonth(), (i * 2), 3);
//         items = new CalendarEvent("event " + i, startDate, endDate, false, colors[i * 10 % (colors.length - 1)]);
//         events.push(items);
//         if (i % 3 === 0) {
//           items = new CalendarEvent("second " + i, startDate, endDate, true, colors[i * 5 % (colors.length - 1)]);
//             events.push(items);
//         }
//     }
//     return events;
// }

get eventSource() {
  return this.items;
}

  formatDate(dates){
    console.log("DATE: ", dates)
    let date = new Date(dates)
    // let promise = new Promise((resolve, reject) => {
      return date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear()
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
    const dataStore = Kinvey.DataStore.collection('availableSpots');

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
