import { Component, OnInit, NgZone } from "@angular/core";
import { DataService } from "~/app/data.service";
import { ModalDialogParams } from "nativescript-angular/modal-dialog";
import { Router } from "../../utils";

@Component({
  selector: "app-confirm",
  templateUrl: "./confirm.component.html",
  styleUrls: ["./confirm.component.scss"]
})
export class ConfirmComponent implements OnInit {
  loading = false;
  constructor(
    private service: DataService,
    private _params: ModalDialogParams,
    private zone: NgZone
  ) {}

  ngOnInit() {}
  async closeModal() {
    this._params.closeCallback("logout");
  }

  async checkIfVerified() {
    try {
      this.loading = true;
      //confirm("Email not verified. Please doble check and try again");
      let u = await this.service.checkVerified();
      this.loading = false;
      console.log("all good");
      this._params.closeCallback("reload");
    } catch (error) {
      this.loading = false;
      this.zone.run(() => {
        console.log("all bad");
        alert("Email not verified. Please doble check and try again");
      });
    }
  }
}
