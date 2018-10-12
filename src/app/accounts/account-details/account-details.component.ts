import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../data.service';
// import { frameModule } from 'ui/frame';
const Observable = require('data/observable').Observable;

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss']
})
export class AccountDetailsComponent implements OnInit {
  sub: any;
  id: any;
  account: any;
  piedata: any;

  constructor(private service: DataService, private route: ActivatedRoute) {
    this.account = { invoice: [] };
  }

  ngOnInit() {
    const pageData = new Observable();

    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; // (+) converts string 'id' to a number
      console.log(this.id);
      this.service.getAccounts(this.id).subscribe(account => {
        this.account = account;
        this.piedata = account.invoice;
        console.log('GENERATIONDATA: ', account.invoice);
      });

      // In a real app: dispatch action to load the details here.
    });
  }
}
