import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { User } from '../model/User.model';

import { OTPComponent } from '../otp/otp.component';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  forgotPasswordForm=new  FormGroup({
    email:new FormControl("",[Validators.required,Validators.email])

  })
  constructor(private formBuilder: FormBuilder, private router: Router, private route: Router, private authService: AuthService, private dialog: MatDialog) { }
  user: User = new User;


  sendOTP() {
    this.authService.getOTP(this.forgotPasswordForm.value.email).subscribe((x:any)=>
      {
        localStorage.setItem("email",this.forgotPasswordForm.value.email!)
        this.dialog.closeAll();

      this.dialog.open(OTPComponent,{
        width:"40%",
        data:x
      })
  },error=>{
    this.router.navigateByUrl("");
    console.log(error);
  }
  )
}
  ngOnInit(): void {
  }
get forgotPasswordFormValidator(){
  return this.forgotPasswordForm.controls;
}
}
