import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Users } from './users';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  [x: string]:any;
  sharedMail : any;
  private resturl: string = 'http://localhost:8080/ToDoListRLL/user';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  generateToken(user:Users):Observable<any>
  {
    //generate token
    return this.http.post(`${this.resturl}/getUser`,user);
  }

  getAUser(emailId: any): Observable<Users> {
    return this.http
      .get<Users>(this.resturl + '/getAUser/' + emailId)
      .pipe(retry(1), catchError(this.handleError));
  }

  createUser(users: any): Observable<Users> {
    return this.http
      .post<Users>(
        this.resturl + '/createUser',
        JSON.stringify(users),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  updateUser(users: any): Observable<Users> {
    return this.http
      .put<Users>(
        this.resturl + '/updateUser',
        JSON.stringify(users),
        this.httpOptions
      )
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

  //To login User
  loginUser(token: any)
  {
    localStorage.setItem("token",JSON.stringify(token));
    return true;
  }

  loginAdmin(admin: any)
  {
    localStorage.setItem("admin",admin);
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
logoutUser()
  {
    localStorage.removeItem('token');
     return true;
  }

  //To get token
  getToken()
  {
    return localStorage.getItem("token");
  }
}
