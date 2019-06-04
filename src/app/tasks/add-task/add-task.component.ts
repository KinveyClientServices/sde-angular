import { Component, OnInit } from "@angular/core";
import { DataService } from "../../data.service";

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

  async save() {
    const that = this;
    console.log("here");
    Promise.resolve(Kinvey.User.getActiveUser())
    .then((user: Kinvey.User) => {
      if (user) {
        console.log("prettyname: ", this.item.prettyname)
        return user.update({
          email: this.email,
          prettyname: this.item.prettyname,
          _downloadURL: this.item._downloadURL
        });
      }
      return user;
    })
    .then((user: Kinvey.User) => {
      this.router.navigate(["files"]);

    })
    .catch(() => {
      // ...
    });
    this.router.navigate(["files"]);
  }
  back() {
    (<any>this.router).back();
  }
}
