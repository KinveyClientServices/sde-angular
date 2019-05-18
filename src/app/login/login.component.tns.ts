import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import { Router } from "../utils";
import { Config } from "../config";
import { Page } from "tns-core-modules/ui/page";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
  selector: "Login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  username = "drignacio";
  password = "drignacio";
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

  async login() {
    try {
      this.processing = true;
      let u: any = await this.dataService.login(this.username, this.password);
      let roleId = u.data._kmd.roles ? u.data._kmd.roles[0].roleId : null;
      if (roleId != null) {
        console.log(roleId);
        //role id is:
        //385c06fe-ab90-4fda-826a-4b428924cb99
        console.log(roleId);
        console.log("it's a doctor");
        this.router.navigate(["../provider/default"], { clearHistory: true });
      } else {
        console.log("it's a patient");
        this.router.navigate(["../patient/default"], { clearHistory: true });
      }
      console.log("LOG IN SUCsCESSFUL");
    } catch (exception) {
      console.log(exception);
      alert("Invalid credentials");
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
