import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserauthenticationService {

  isLoggedIn: boolean = false;
  private authenticationURL = "http://localhost:8088/user/";
  

  constructor(private http: HttpClient) { }

  registerUser(data: any): Observable<any> {
    console.log(data);
    return this.http.post(`${this.authenticationURL}register`, data)
  }

  loginUser(data: any): Observable<any> {
    console.log(data);
    return this.http.post(`${this.authenticationURL}login`, data);
  }

  getAllUserName():Observable<any> {
    return this.http.get(`${this.authenticationURL}fetchAll`)
  }

  // getproductdata():Observable<any> {
  //   return this.http.get(`${this.authenticationURL}fetchAllproduct`)
  // }

  getstudentdata():Observable<any> {
    return this.http.get(`${this.authenticationURL}fetchStudentprofile`)
  }

  sendstudentquestion(quest:any):Observable<any> {
    return this.http.post(`${this.authenticationURL}savequestion`,quest)
  }

  
  getstudentquestion(email:any):Observable<any> {
    console.log(localStorage.getItem('email'));  
    return this.http.get(`${this.authenticationURL}fetchquestionbyemail`+"/"+email);
  }
  saveanswer(ans:any):Observable<any> {
    console.log(ans);   
    return this.http.post(`${this.authenticationURL}saveanswer`,ans)
  }
}

