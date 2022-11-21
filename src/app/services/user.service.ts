import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieOptions, CookieService } from 'ngx-cookie-service';
import { catchError, throwError } from 'rxjs';
import { SignInModel } from '../models/sign-in-model';
import { SigninResponseModel } from '../models/signinResponse';

export const ACCESS_TOKEN: string = 'accessToken';

@Injectable({
  providedIn: 'root'
})


export class UserService {
  base_url = "http://localhost:8080/v1/";

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  setToken(token:string){
    this.cookieService.set(ACCESS_TOKEN, token)
  }

  getToken(){
    return this.cookieService.get(ACCESS_TOKEN);
  }

  cleanToken(){
    this.cookieService.delete(ACCESS_TOKEN);
  }

  checkToken(){
    return this.cookieService.check(ACCESS_TOKEN);
  }

  public signupUser(body:any){
 
    return this.http.post(this.base_url+"users/signup", body)
    .pipe(
      catchError(err => {
        if (err.status === 409) {
          return '0';
        } else {
          return throwError(err);
        }
      })
    );
  }

  public signinUser(username: string, password: string){
    const signinModel = new SignInModel(username, password);
    console.log("JSON parseado ",JSON.stringify(signinModel));
    return this.http.post<SigninResponseModel>(this.base_url+"users/signin", signinModel)
    .pipe(
      catchError(err => {
        if (err.status === 401) {
          return '0';
        } else {
          return throwError(err);
        }
      })
    );
  }
}
