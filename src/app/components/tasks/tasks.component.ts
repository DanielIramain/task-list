import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';
import { TASK } from 'src/app/mock-tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
/** declaration of task once we import Task and TASK and then move to the tasks html file to show them */  
  tasks: Task[] = TASK
  constructor() { }

  ngOnInit(): void {
  }

}
