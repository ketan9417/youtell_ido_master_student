import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import { User } from '../model/User.model';
import { AuthService } from '../services/auth.service';
import { UserauthenticationService } from '../services/userauthentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private route: Router, private authService: AuthService, private dialog: MatDialog) { }

  // Handling Login Inputs

  loginForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
  })

  //Forms validators

  get loginFormValidator() {
    return this.loginForm.controls;
  }

  user: User = new User;

  login() {
    console.log(this.loginForm.value);
    if ((this.loginForm.value.email != '' && this.loginForm.value.password != '') && (this.loginForm.value.password != null && this.loginForm.value.email != null)) {
      this.user.email = this.loginForm.value.email;
      this.user.password = this.loginForm.value.password;

      //Generate Token
console.log("heello");

      this.authService.generateToken(this.user).subscribe((x: any) => {
        alert("Login Success!!!");

        // if token generated successfully

        this.authService.loginUser(x.token, this.user.email);       
        this.dialog.closeAll();
        this.route.navigate(['/product']);

      },
        (error) => {
          // if error occurs
          alert("User Not Found Please Provide Correct Credentials");

        }
      )
    } else {
      console.log("Fields Are Empty")
    }
  }

  ForgotPasswordpopup(enteranimation: any, exitanimation: any) {
    this.dialog.closeAll();
    this.dialog.open(ForgotPasswordComponent, {
      enterAnimationDuration: enteranimation,
      exitAnimationDuration: exitanimation,
      width: "40%",

    })
  }
  ngOnInit(): void {

  }
}
