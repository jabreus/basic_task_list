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
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.userService.getToken()}`,
  });
  
  public getTaskList(){
    return this.http.get(this.base_url + "tasks", {headers:this.headers})
      .pipe(
        catchError(err => {
          return throwError(err);
        })
      );
  }

  public addTask(content: any){
    return this.http.post(this.base_url + "tasks", content, {headers: this.headers})
      .pipe(
        catchError(err => {
          return throwError(err);
        })
      );
  }

  constructor(private http: HttpClient, private userService: UserService) { }
}
