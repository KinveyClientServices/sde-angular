import { Component, OnInit, NgZone } from "@angular/core";
import { DataService } from "../../data.service";
import { Router } from "../../utils";
import { Config } from "../../config";
@Component({
  selector: "app-files",
  templateUrl: "./files.component.html",
  styleUrls: ["./files.component.scss"]
})
export class FilesComponent implements OnInit {
  items;
  title: string;
  constructor(
    private service: DataService,
    private router: Router,
    private zone: NgZone
  ) {}

  ngOnInit() {
    this.service.getFiles().then(files => {
      this.zone.run(() => {
        this.items = files;
      });
    });
    this.title = Config.filesPageTitle;
  }
  goToDetails(item) {
    this.service.selectedFile = item;
    this.router.navigate(["files/details"]);
  }
  onDrawerButtonTap(): void {}
}
