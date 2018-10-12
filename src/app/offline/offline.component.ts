import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { DrawerHelper } from '../utils/drawer-helper';
import { Config } from '../config';
@Component({
  selector: 'app-offline',
  templateUrl: './offline.component.html',
  styleUrls: ['./offline.component.scss']
})
export class OfflineComponent implements OnInit {
  items;
  title: any;
  constructor(private service: DataService) {}

  async ngOnInit() {
    this.title = Config.offlinePageTitle;
    await this.service.pullAccountData();
    this.items = this.service.getSyncAccounts();
  }
  onDrawerButtonTap(): void {
    DrawerHelper.show();
  }

  async addMe() {
    var myaccounts = [];
    for (var i = 0; i < 10; i++) {
      const thisaccount = {
        WarehouseName: 'Warehouse #' + i,
        autogen: true,
        Address: i + ' Main Street',
        City: 'Boston',
        Country: 'US'
      };
      myaccounts.push(thisaccount);
    }
    await this.service.addSyncAccounts(myaccounts);
    this.items = this.service.getSyncAccounts();
    // alert('all done');
  }

  async syncMe() {
    console.log('syncng');
    await this.service.pushSyncAccountData();
    this.items = this.service.getSyncAccounts();
    // alert('all sync done');
  }
}
