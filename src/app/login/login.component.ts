import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { DataService } from "../data.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  logo;
  title: string;
  createForm(): any {
    this.loginForm = this.fb.group({
      name: ["admin", Validators.required],
      password: ["admin", Validators.required]
    });
  }
  constructor(
    private service: DataService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.logo = "images/logo.png";
    this.title = "ACME Mortgage";
  }
  async login() {
    console.log("test");
    let { name, password } = this.loginForm.value;
    try {
      await this.service.login(name, password);
      this.router.navigate(["home"]);
    } catch (error) {
      console.log(error);
      alert("auth error");
    }
  }

  async loginWithMIC() {
    try {
      await this.service.loginWithMIC("http://localhost:4200");
      this.router.navigate([""]);
    } catch {
      alert("auth error");
    }
  }
}
