import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Operations } from '../model/Operation.model';

import { UserauthenticationService } from '../services/userauthentication.service';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private service:UserauthenticationService) { }
  questiondata:any;
  ngOnInit(): void {
  
  this.service.getstudentquestion(localStorage.getItem('email')).subscribe((x:any)=>{
  console.log(x);
  this.questiondata=x;
})
  }
  answerform=new  FormGroup({
    answer:new FormControl("",[Validators.required]), 
  })
  get answerformValidator() {
    return this.answerform.controls;
  }
  
  operations:Operations=new Operations(); 

  submitans(ans:any,id:any){  
  this.operations.q_id=id;
   this.operations.answer= ans;
   this.service.saveanswer(this.operations).subscribe((x)=>{ 
   })
  }


}
