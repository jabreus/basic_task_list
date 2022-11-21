import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  base_url = "http://localhost:8080/v1/"

  
  public getTaskList(headers: HttpHeaders){
    return this.http.get(this.base_url + "tasks", {headers: headers})
      .pipe(
        catchError(err => {
          return throwError(err);
        })
      );
  }

  public addTask(content: any, headers: HttpHeaders){
    return this.http.post(this.base_url + "tasks", content, {headers: headers})
      .pipe(
        catchError(err => {
          return throwError(err);
        })
      );
  }

  constructor(private http: HttpClient, private userService: UserService) { }
}
