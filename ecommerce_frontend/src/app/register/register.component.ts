import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../model/User.model';
import { UserauthenticationService } from '../services/userauthentication.service';
import { matchpassword } from '../validator/passwordmath';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  submitted = false;
 
  constructor( private router: Router, private formbuilder: FormBuilder,  private route: Router ,private service:UserauthenticationService) { }

  registerform = new FormGroup({
    userName: new FormControl('',[Validators.required,Validators.pattern("^[A-Za-z]\\w{2,29}$")]),
    email: new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(20)]),
    confirmpassword:new FormControl('',[Validators.required])
  },
  {
    validators:matchpassword
  }
  )
  
  get registerFormValidator() {
    return this.registerform.controls;
  }

  user:User=new User;



  register(){
    console.log(this.registerform.value);
    if ((this.registerform.value.email != '' && this.registerform.value.password != '' && this.registerform.value.userName !='') && (this.registerform.value.password != null && this.registerform.value.email != null && this.registerform.value.userName !=null))
    {
    this.user.email=this.registerform.value.email;
    this.user.password=this.registerform.value.password;
    this.user.userName=this.registerform.value.userName;

    this.service.registerUser(this.user).subscribe(x=>{alert("User Registered Successfully"); this.router.navigate([""])},
    (err)=>{ alert("User Already Registered With  Our system Please Use Different Email") } )
    }
    else {
      console.log("Fields Are Empty")
    }
  }
  ngOnInit(): void {  }

  MustMatch(password:any,confirmpassword:any){
    return (formGroup: FormGroup) =>{
      const passwordcontrol= formGroup.controls[password]
      const confirmpasswordcontrol= formGroup.controls[confirmpassword]
      if(confirmpasswordcontrol.errors && !confirmpasswordcontrol.errors['MustMatch']){
        return
      }
      if(passwordcontrol.value!==confirmpasswordcontrol.value){
        confirmpasswordcontrol.setErrors({MustMatch:true})
      }
      else{
        confirmpasswordcontrol.setErrors(null)
      }
    }
  }

  

  onSubmit(){
    // this.service.registerUser(this.accountForm.value).subscribe(response=>{
    //  alert("Successfully User is registered")
    //  this.route.navigate(["login"])
    // },error => 
    // alert("User Registration Failed, Try again"))
    // // console.log("submitted")
  }

}


