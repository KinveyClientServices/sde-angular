import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import { Router } from "../utils";
import { Config } from "../config";

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
  constructor(private dataService: DataService, private router: Router) {
    // Use the component constructor to inject providers.
  }

  ngOnInit(): void {
    this.processing = false;

    // Init your component properties here.
    this.logo = Config.appLogo;
    this.title = Config.appTitle;
  }

  async login() {
    try {
      this.processing = true;
      await this.dataService.login(this.username, this.password);
      this.router.navigate([""], <any>{ clearHistory: true });
    } catch {
      alert("Invalid credentials");
    } finally {
      this.processing = false;
    }
  }
  async loginWithMIC() {
    try {
      await this.dataService.loginWithMIC();
      this.router.navigate([""]);
    } catch {
      alert("Invalid credentials");
    } finally {
      this.processing = false;
    }
  }
}
