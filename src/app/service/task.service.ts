import { Injectable } from '@angular/core';
import {HttpClient, HttpHandler, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Task } from '../Task';
import { TASK } from '../mock-tasks';

const httpOptions = {
  headers: new HttpHeaders ({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  /* def const to keep the url of the server */
  private apiUrl = 'http://localhost:5000/tasks'

  constructor(
    private http:HttpClient
  ) { }
  getTask(): Observable<Task[]> {
    /* 
    this get return the list of tasks
    With this we call to the 'back-end' 
    to request all the tasks 
    (we read the tasks from the db.json)
    */
    return this.http.get<Task[]>(this.apiUrl) 
  }
  
  deleteTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`
    return this.http.delete<Task>(url)
  }
  
  updateTaskReminder(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`
    return this.http.put<Task>(url, task, httpOptions)
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task, httpOptions)
  }
}
