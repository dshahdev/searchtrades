import { Component, OnInit } from '@angular/core';
import { Router }     from '@angular/router';

import { Tasks } from '../tasks';
import { TaskdataService } from '../taskdata.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  allTasks:Tasks[] = [];

  constructor(private datataskService: TaskdataService) { }

  ngOnInit() {
    this.datataskService.getAllTasks().subscribe(
      (data: Tasks[]) => {
          this.allTasks = data;
          console.log("tasks: "+this.allTasks);
      }
    )
  }

}
