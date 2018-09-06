import { Component, OnInit } from "@angular/core";
import { DataService } from "~/app/data.service";
import { RouterExtensions } from "nativescript-angular";

@Component({
  selector: "Login",
  moduleId: module.id,
  templateUrl: "./login.component.html"
})
export class LoginComponent implements OnInit {
  username = "ignacio";
  password = "ignacio";
  constructor(
    private dataService: DataService,
    private router: RouterExtensions
  ) {
    // Use the component constructor to inject providers.
  }

  ngOnInit(): void {
    // Init your component properties here.
  }

  async login() {
    try {
      await this.dataService.login(this.username, this.password);
      this.router.navigate([""], {
        clearHistory: true,
        animated: true,
        transition: {
          name: "slideTop",
          duration: 350,
          curve: "ease"
        }
      });
    } catch {
      alert("Invalid credentials");
    }
  }
  async loginWithMIC() {
    try {
      await this.dataService.loginWithMIC();
      this.router.navigate([""], {
        clearHistory: true,
        animated: true,
        transition: {
          name: "slideTop",
          duration: 350,
          curve: "ease"
        }
      });
    } catch {
      alert("Invalid credentials");
    }
  }
}
