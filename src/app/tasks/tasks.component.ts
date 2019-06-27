import { Component, OnInit, NgZone } from "@angular/core";
import { DataService } from "../data.service";
import { DrawerHelper } from "../utils/drawer-helper";
import { Router } from "../utils";
import { Config } from "../config";
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
      //var resultSoFar, i
      var i = data.length
      for (data; i < i; i++) {
        data[i].startDate = this.formatDate(data[i].startDate)
        console.log("data: ", data[i].startDate)

      }
      // data.startDate = this.formatDate(data.startDate)
      // data.endDate = this.formatDate(data.endDate)
      this.zone.run(() => {
        this.items = data;
        // this.startDate = this.formatDate(this.items.startDate)
        // this.endDate = this.formatDate(this.items.endDate)

      });
    });
  }

  formatDate(date){
    console.log("DATE: ", date)
    return date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear()
  }

  onDrawerButtonTap(): void {
    DrawerHelper.show();
  }
  addButtonTapped() {
    this.router.navigate(["tasks/add-task"]);
  }
  async markDone(item) {
    await this.service.toggleTaskStatus(item);
  }
}
