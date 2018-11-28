import { Component, OnInit, NgZone } from "@angular/core";
import { DataService } from "../data.service";
import { DrawerHelper } from "../utils/drawer-helper";
import { Router } from "../utils";
import { Config } from "../config";
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
  ) { }

  ngOnInit() {
    this.service.getFiles().subscribe(files => {
      this.zone.run(() => {
        console.log(files);
        this.items = files;
      });
    });
    this.title = Config.filesPageTitle;
  }
  goToDetails(item) {
    this.service.selectedFile = item;
    this.router.navigate(["files/details"]);
  }
  onDrawerButtonTap(): void {
    DrawerHelper.show();
  }
}
