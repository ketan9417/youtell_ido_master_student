import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {


  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
  }

  RegisterPopUp(enteranimation:any,exitanimation:any){
    this.dialog.open(RegisterComponent,{
      enterAnimationDuration:enteranimation,
      exitAnimationDuration:exitanimation,
      width:"50%"
    })
  }

  LoginPopUp(enteranimation:any,exitanimation:any){
    this.dialog.open(LoginComponent,{
      enterAnimationDuration:enteranimation,
      exitAnimationDuration:exitanimation,
      width:"40%",
      
    })
  }
}
