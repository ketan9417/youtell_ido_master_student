import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { User } from '../model/User.model';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent implements OnInit {

  // handling the form inputs

  updatePasswordForm = new FormGroup({
    newpassword: new FormControl("",[Validators.required]),
    confirmpassword: new FormControl("",[Validators.required])
  })

  //injecting required services

  constructor(private authService: AuthService, private router: Router, private dialog: MatDialog) { }

  //Creating user object
  user: User = new User;

  


//function called by click
  updatePassword() {
    console.log("update password");
    
    this.user.email = localStorage.getItem("email")!;
    this.user.password = this.updatePasswordForm.value.newpassword!;
    this.authService.resetPassword(this.user).subscribe(x => {
      alert("password updated successfully")
      this.dialog.closeAll();
      // this.router.navigateByUrl("login")

    })
  }
  ngOnInit(): void {
  }
}
