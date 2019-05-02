import {
  Component,
  OnInit,
  ChangeDetectorRef,
  AfterViewInit
} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DataService } from "../../data.service";
import { Router } from "../../utils/router";

@Component({
  selector: "app-account-details",
  templateUrl: "./account-details.component.html",
  styleUrls: ["./account-details.component.scss"]
})
export class AccountDetailsComponent implements OnInit {
  sub: any;
  id: any;
  account: any = { invoice: [] };
  action;
  duedate;

  constructor(
    private service: DataService,
    private route: ActivatedRoute,
    private router: Router,
    private cd: ChangeDetectorRef
  ) {}
  back() {
    (<any>this.router).back();
  }

  async ngOnInit() {
    console.log("init details");
    this.sub = this.route.params.subscribe(params => {
      this.id = params["id"]; // (+) converts string 'id' to a number
      console.log(this.id);
      this.service.getAccounts(this.id).subscribe(account => {
        console.log(account);
        this.account = account;
        this.cd.detectChanges();
      }, (error) => {
        console.log(error);
      }, () => {
        // ...
      });

      // In a real app: dispatch action to load the details here.
    });
  }

  async save() {
    // console.log("here");
    // console.log(this.action);
    // console.log(this.duedate.toLocaleDateString());
    // await this.service.saveTask({
    //   action: this.action,
    //   duedate: this.duedate.toLocaleDateString()
    // });
    // this.router.navigate(["tasks"]);
    console.log("CLICKED")
  }
}
