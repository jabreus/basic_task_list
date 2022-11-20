import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  base_url = "localhost:8080/v1"

  constructor(private http: HttpClient) { }

  public signupUser(body:any){
    return this.http.post(this.base_url+"users/signup", body)
  }

  public signinUser(body:any){
    return this.http.post(this.base_url+"users/signin", body)
  }
}
