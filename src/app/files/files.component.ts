import { Component, OnInit, NgZone } from "@angular/core";
import { DataService } from "../data.service";
import { DrawerHelper } from "../utils/drawer-helper";
import { Router } from "../utils";
import { Config } from "../config";
import * as Kinvey from "kinvey-nativescript-sdk";

@Component({
  selector: "app-files",
  templateUrl: "./files.component.html",
  styleUrls: ["./files.component.scss"]
})
export class FilesComponent implements OnInit {
  items;
  title: string;
  user;
  constructor(
    private service: DataService,
    private router: Router,
    private zone: NgZone
  ) {}

  ngOnInit() {
    const dataStore = Kinvey.DataStore.collection('whitepapers');
    this.user = Kinvey.User.getActiveUser();
    console.log("user", this.user)

    const subscription = dataStore.find()
    .subscribe((entities: {}[]) => {
      this.zone.run(() => {
        this.items = entities;
      });
    }, (e) => {
      console.log(e)
    });

    this.title = Config.filesPageTitle;
  }
  goToDetails(item) {
    this.service.selectedFile = item;
    this.router.navigate(["files/details"]);
  }
  onDrawerButtonTap(): void {
    DrawerHelper.show();
  }
  refresh(): void {
    const dataStore = Kinvey.DataStore.collection('whitepapers');

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
