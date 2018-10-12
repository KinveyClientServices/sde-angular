import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { DrawerHelper } from '../utils/drawer-helper';
import { Router } from '../utils';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  items;
  user;
  constructor(private service: DataService, private router: Router) {}

  ngOnInit() {
    this.items = this.service.getTasks();
    // this.user = this.service.username;
  }
  onDrawerButtonTap(): void {
    DrawerHelper.show();
  }
  async addButtonTapped() {
    await this.service.saveTask();
    alert('Your Alerts have been synced');
    // this.router.navigate(['tasks/add-task']);
  }
  async markDone(item) {
    // console.log('markDown username: ', this.user);
    // item.addressedby = this.user;
    await this.service.toggleTaskStatus(item);
    alert('Alert marked as Stable');
  }
}
