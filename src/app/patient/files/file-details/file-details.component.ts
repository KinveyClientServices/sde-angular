import { Component, OnInit } from "@angular/core";
import { DataService } from "../../../data.service";
import { Router } from "../../../utils";

@Component({
  selector: "app-file-details",
  templateUrl: "./file-details.component.html",
  styleUrls: ["./file-details.component.scss"]
})
export class FileDetailsComponent implements OnInit {
  item;

  constructor(private service: DataService, private router: Router) {
    this.item = this.service.selectedFile;
  }
  back() {
    (<any>this.router).back();
  }

  ngOnInit() {}
}
