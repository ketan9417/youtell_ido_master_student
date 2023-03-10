import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Route, Router } from '@angular/router';
import { User } from '../model/User.model';

import { UpdatePasswordComponent } from '../update-password/update-password.component';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OTPComponent implements OnInit {
  otpForm= new FormGroup({
    otp: new FormControl('')
  })
  constructor(private dialog:MatDialog, public dailog: MatDialogRef<OTPComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private router:Router) { }
    
  user: User = new User;
  
  ngOnInit(): void {
  }
  otp()
  {
  if(this.otpForm.value.otp==this.data){

    this.dialog.closeAll();
    this.dialog.open(UpdatePasswordComponent,{
      width:"40%"
    })
  }else{
    alert("Wrong otp, please try with correct OTP");
this.router.navigateByUrl("")
  }

  }

}