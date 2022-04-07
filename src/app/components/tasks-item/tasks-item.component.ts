import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/Task';
import { TASK } from 'src/app/mock-tasks';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})
export class TasksItemComponent implements OnInit {

  @Input() task: Task = TASK[0]
  faTimes = faTimes;
  constructor() { }

  ngOnInit(): void {
  }

}
