import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import { Router } from "../utils";
import { Config } from "../config";
import { Page } from "tns-core-modules/ui/page";
import { RouterExtensions } from "nativescript-angular/router";
import * as Kinvey from "kinvey-nativescript-sdk";

@Component({
  selector: "Login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  username = "ignacio";
  password = "ignacio";
  processing: boolean;
  logo: string;
  title: string;
  constructor(
    private dataService: DataService,
    private router: RouterExtensions,
    private page: Page
  ) {
    this.page.actionBarHidden = true;
    // Use the component constructor to inject providers.
  }

  ngOnInit(): void {
    // Init your component properties here.
    this.logo = Config.appLogo;
    this.title = Config.appTitle;
  }

  async logout() {
    await this.dataService.logout();

  }

  async login() {
    try {
      this.processing = true;
      await this.dataService.loginAnon();
      console.log("LOG IN SUCCESSFUL");
      this.router.navigate(["home"], { clearHistory: true });
    } catch(err) {
      alert(err);
    } finally {
      this.processing = false;
    }
  }
  async loginWithMIC() {
    try {
      this.processing = true;
      await this.dataService.loginWithMIC("sde://");
      this.router.navigate([""]);
    } catch {
      alert("Invalid credentials");
    } finally {
      this.processing = false;
    }
  }
}
