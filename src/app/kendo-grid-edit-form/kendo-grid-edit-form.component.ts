import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Inventory } from "../home/home.component";

@Component({
  selector: "kendo-grid-edit-form",
  templateUrl: "./kendo-grid-edit-form.component.html",
  styleUrls: ["./kendo-grid-edit-form.component.scss"]
})
export class KendoGridEditFormComponent implements OnInit {
  public active = false;
  public editForm: FormGroup = new FormGroup({
    _id: new FormControl(),
    AssetTag: new FormControl("", Validators.required),
    SubType: new FormControl("", Validators.required),
    Make: new FormControl(),
    Specs: new FormControl(),
    Owner: new FormControl(),
    Custodian: new FormControl(),
    Location: new FormControl(),
    Department: new FormControl(),
    Status: new FormControl(),
    LCR: new FormControl(false),
    Reported: new FormControl(false),
    Audit: new FormControl(false)
  });

  @Input() public isNew = false;

  @Input() public set model(product: Inventory) {
    console.log(product);
    this.editForm.reset(product);

    this.active = product !== undefined;
  }

  @Output() cancel: EventEmitter<any> = new EventEmitter();
  @Output() save: EventEmitter<Inventory> = new EventEmitter();

  public onSave(e): void {
    e.preventDefault();
    this.save.emit(this.editForm.value);
    this.active = false;
  }

  public onCancel(e): void {
    e.preventDefault();
    this.closeForm();
  }

  private closeForm(): void {
    this.active = false;
    this.cancel.emit();
  }
  constructor() {}

  ngOnInit() {}
}
