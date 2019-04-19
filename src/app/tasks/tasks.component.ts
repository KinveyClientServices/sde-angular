import { Component, OnInit, NgZone, ChangeDetectorRef } from "@angular/core";
import { DataService } from "../data.service";
import { DrawerHelper } from "../utils/drawer-helper";
import { Router } from "../utils";
import { Config } from "../config";
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: "app-tasks",
  templateUrl: "./tasks.component.html",
  styleUrls: ["./tasks.component.scss"]
})
export class TasksComponent implements OnInit {
  items;
  sub: any;
  id: any;
  image: any;
  title: string;

  constructor(
    private service: DataService,
    private router: Router,
    private zone: NgZone,
    private route: ActivatedRoute,
    private cd: ChangeDetectorRef

  ) {}

  ngOnInit() {
    console.log("ON INIT TASKS");
    this.title = Config.tasksPageTitle;

    this.sub = this.route.params.subscribe(params => {
      this.id = params["id"]; // (+) converts string 'id' to a number
      console.log(this.id);
      this.service.getTasks(this.id).subscribe(data => {
        console.log(data);
        this.items = data;
        for (var i = 0, l = this.items.length; i < l; i++) {
          if (this.items[i].goalStatus === 1) {
            this.items[i].goalStatus = '../../assets/images/GreenLight.png';
          }
          if (this.items[i].goalStatus === 2) {
            this.items[i].goalStatus = '../../assets/images/YellowLight.png';
          }
          if (this.items[i].goalStatus === 3) {
            this.items[i].goalStatus = '../../assets/images/RedLight.png';
          }
        }
        this.cd.detectChanges();
      }, (error) => {
        console.log(error);
      }, () => {
        // ...
      });

      // In a real app: dispatch action to load the details here.
    });
    // this.service.getTasks().subscribe(data => {
    //   this.zone.run(() => {
    //     this.items = data;
    //   });
    // });
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
