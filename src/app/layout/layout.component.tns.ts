import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import { Router } from "../utils";
import { ChatHelper } from "../utils/chat-helper";
import { Page } from "tns-core-modules/ui/page";
declare var nativechat: any;
@Component({
  selector: "app-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.scss"]
})
export class LayoutComponent implements OnInit {
  username;
  constructor(
    private service: DataService,
    private router: Router,
    private page: Page
  ) {
    this.username = this.service.username;
    this.page.actionBarHidden = true;
  }

  ngOnInit() {
    ChatHelper.show();
  }
  async logout() {
    await this.service.logout();
    this.router.navigate(["login"]);
  }
}
