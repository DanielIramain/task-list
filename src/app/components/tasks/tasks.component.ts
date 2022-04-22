import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/service/task.service';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
/** declaration of task once we import Task and TASK and then move to the tasks html file to show them */  
  tasks: Task[] = []
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTask().subscribe((tasks)=>(
      this.tasks = tasks
    ));
  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task)
      .subscribe(()=>(
        this.tasks = this.tasks.filter( t => {return t.id !== task.id}) /* return all of the elements except the one we delete */
    ))
  }

  toggleReminder(task: Task) {
    task.reminder = !task.reminder
    this.taskService.updateTaskReminder(task).subscribe(); /*the logic is managed in the component, we pass the task updated to the service and this one saves it in the DB */
  }
}
