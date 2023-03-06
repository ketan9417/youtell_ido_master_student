import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/User.model';
import { UserauthenticationService } from './userauthentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }


// calling server to generate token
generateToken(credentials:any){
  return this.http.post("http://localhost:8088/user/login",credentials)

}

  // for login user
  loginUser(token:any,email:any){
    localStorage.setItem("token",token)
    localStorage.setItem("email",email)
    return true;
  }

  getEmail(){
   return localStorage.getItem("email")
  }
  // to check user is loggedin or not
  isLoggedIn(){
    let token=localStorage.getItem("token");
    if(token==undefined || token==='' || token==null){
      return false;
    }else{
      return true;
    }
  }

  // to log out user
  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('email')
    return  true;
  }

  // to get token
  getToken(){
    return localStorage.getItem('token');
  }

  
//for forgot password otp generation
getOTP(data:any){ 
  return this.http.get<any>("http://localhost:8088/user/forgot-password/"+data);

}
resetPassword(user:User){
  return this.http.put("http://localhost:8088/user/update-password",user);
}
}
