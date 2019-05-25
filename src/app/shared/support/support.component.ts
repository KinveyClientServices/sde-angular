import { Component, OnInit } from "@angular/core";
import { ModalDialogParams } from "nativescript-angular/modal-dialog";
import { Page } from "tns-core-modules/ui/page";

@Component({
  selector: "app-support",
  templateUrl: "./support.component.html",
  styleUrls: ["./support.component.scss"]
})
export class SupportComponent implements OnInit {
  constructor(private _params: ModalDialogParams) {}

  ngOnInit() {}

  closeModal(): void {
    this._params.closeCallback("return value");
  }
}
