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
  item: any = {};
  posts: any = [{ Body: "test" }];

  constructor(
    private service: DataService,
    private route: ActivatedRoute,
    private router: Router,
    private cd: ChangeDetectorRef
  ) {}
  back() {
    (<any>this.router).back();
  }

  getData() {
    this.service.getAccounts(this.id).subscribe(account => {
      this.item = account;
      this.cd.detectChanges();
    });
  }

  ngOnInit() {
    console.log("init detaigls");
    this.sub = this.route.params.subscribe(params => {
      this.id = params["id"]; // (+) converts string 'id' to a number
      this.getData();

      this.service.getPosts(this.id).subscribe(posts => {
        this.posts = posts;
        //console.log(posts);
        this.cd.detectChanges();
      });
    });
  }

  async goToDonate() {
    let x: any = await prompt("How much would you like to donate?");
    if (x.result) {
      console.log(x.text);
      await this.service.donate(this.id, x.text);
      alert("Thanks!!");
    }
  }

  async toggleFollow() {
    console.log("toggling");
    try {
      this.item.following = !this.item.following;
      let response = await this.service.toggleFollow(
        this.item,
        !this.item.following
      );
      //this.getData();
    } catch {
      console.log("error");
    }
  }
}
