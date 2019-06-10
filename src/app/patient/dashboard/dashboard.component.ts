import { Component, OnInit, ViewContainerRef } from "@angular/core";
import { DataService } from "~/app/data.service";
import {
  ModalDialogService,
  ModalDialogOptions
} from "nativescript-angular/modal-dialog";
import { ConfirmComponent } from "../confirm/confirm.component";
import { InsufficientCredentialsError } from "kinvey-js-sdk/lib/errors";
import { Router } from "../../utils";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  dashboard: any = {};
  constructor(
    private service: DataService,
    private _modalService: ModalDialogService,
    private _vcRef: ViewContainerRef,
    private router: Router
  ) {}

  selected = 0;
  markSelected(v) {
    console.log(v);
    this.selected = v;
  }

  async ngOnInit() {
    console.log(
      "FETCHING DATAAAAAddAAAAAAAAAAAAA-----------------------------"
    );
    try {
      this.dashboard = await this.service.getDashboardData();
    } catch (error) {
      if (error instanceof InsufficientCredentialsError) {
        const options: ModalDialogOptions = {
          viewContainerRef: this._vcRef,
          context: {},
          fullscreen: true
        };
        setTimeout(() => {
          this._modalService
            .showModal(ConfirmComponent, options)
            .then(async (result: string) => {
              if (result === "logout") {
                await this.service.logout();
                this.router.navigate(["login"], <any>{ clearHistory: true });
              } else {
                this.dashboard = await this.service.getDashboardData();
              }
            });
        }, 1000);
      }
    }
  }
  fetchData() {}
}
