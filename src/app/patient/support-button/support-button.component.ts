import { Component, OnInit, ViewContainerRef, Input } from "@angular/core";
import {
  ModalDialogOptions,
  ModalDialogService
} from "nativescript-angular/modal-dialog";
import { SupportComponent } from "~/app/support/support.component";

@Component({
  selector: "SupportButton",
  templateUrl: "./support-button.component.html",
  styleUrls: ["./support-button.component.scss"]
})
export class SupportButtonComponent implements OnInit {
  @Input() col;
  constructor(
    private _modalService: ModalDialogService,
    private _vcRef: ViewContainerRef
  ) {}
  supportButtonTapped(): void {
    const options: ModalDialogOptions = {
      viewContainerRef: this._vcRef,
      context: {},
      fullscreen: true
    };

    this._modalService
      .showModal(SupportComponent, options)
      .then((result: string) => {
        console.log(result);
      });
  }

  ngOnInit() {}
}
