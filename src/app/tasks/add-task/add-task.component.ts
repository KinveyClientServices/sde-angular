import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

import { Router } from '../../utils';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  action;
  duedate;

  constructor(private service: DataService, private router: Router) {}

  ngOnInit() {}

  // async save() {
  //   console.log('here');
  //   console.log(this.action);
  //   console.log(this.duedate.toLocaleDateString());
  //   await this.service.saveTask({
  //     action: this.action,
  //     duedate: this.duedate.toLocaleDateString()
  //   });
  //   this.router.navigate(['tasks']);
  // }
}
