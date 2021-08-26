import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskserviceService {
  [x: string]: any;
  private resturl: string = 'http://localhost:8080/ToDoListRLL/task';

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getAllTasks(): Observable<Task[]> {
    return this.http
      .get<Task[]>(
        this.resturl + '/allTask'
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  getAllTasksOfAUser(user:any): Observable<Task[]> {
    return this.http
      .post<Task[]>(
        this.resturl + '/allTaskOfAUser',
        JSON.stringify(user),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  sortTaskByPriority(users:any): Observable<Task[]> {
    return this.http
      .put<Task[]>(
        this.resturl + '/allTaskByPriority',
        JSON.stringify(users),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }
  
  getTaskById(taskId: any): Observable<Task> {
    return this.http
      .get<Task>(this.resturl + '/getTask/' + taskId)
      .pipe(retry(1), catchError(this.handleError));
  }

  getTaskByName(taskName: any,users:any): Observable<Task[]> {
    return this.http
      .put<Task[]>(
        this.resturl + '/getTaskByName' + taskName,
        JSON.stringify(users),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  createTask(task: any): Observable<Task> {
    return this.http
      .post<Task>(
        this.resturl + '/createTask',
        JSON.stringify(task),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  updateTask(task: any): Observable<Task> {
    return this.http
      .put<Task>(
        this.resturl + '/updateTask',
        JSON.stringify(task),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  deleteTask(taskId: any): Observable<Task> {
    return this.http
      .delete<Task>(this.resturl + '/deleteTask/' + taskId, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  handleError(err:any) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = err.error.message;
    } else {
      errorMessage = `Error code : ${err.status} \n Error Message : ${err.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  //To login Task
  loginTask(tokenTask: any)
  {
    localStorage.setItem("tokenTask",JSON.stringify(tokenTask));
    return true;
  }

 


  //To check user is logged in
  isLoggedIn()
  {
    let token=localStorage.getItem("token");

    if(token==undefined || token==='' || token==null)
    {
      return false;
    }else{
      return true;
    }
}
logoutTask()
  {
    localStorage.removeItem('tokenTask');
     return true;
  }

  //To get token
  getTokenTask()
  {
    return localStorage.getItem("tokenTask");
  }
}
