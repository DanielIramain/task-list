import { Injectable } from '@angular/core';
import {HttpClient, HttpHandler} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Task } from '../Task';
import { TASK } from '../mock-tasks';

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
}
