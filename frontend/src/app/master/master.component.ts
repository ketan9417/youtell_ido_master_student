import { Component, OnInit } from '@angular/core';
import { UserauthenticationService } from '../services/userauthentication.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../model/User.model';
import { Operations } from '../model/Operation.model';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {

  constructor(private service:UserauthenticationService) { }
    studentdata:any;
    questiondata:any;
  ngOnInit(): void {
    this.service.getstudentdata().subscribe((x)=>{
    this.studentdata=x;
    console.log(x);
    
    }) 
  }

  operationform=new  FormGroup({
    firstoprand:new FormControl("",[Validators.required]),
    secondoprand:new FormControl("",[Validators.required]),
    operation:new FormControl("",[Validators.required])
  })
  get operationformValidator() {
    return this.operationform.controls;
  }

selected:any;
flag1=false;
  update(e:any){
    this.selected = e.target.value
    this.flag1=true;
  }

  operations:Operations=new Operations();
    flag=false;
  toggle(email:any){
    if(this.selected===undefined){
      alert("please select student name first")
    }else{
    this.service.getstudentquestion(email).subscribe((x:any)=>{
      console.log(x);
      this.questiondata=x;
    })
    this.flag=!this.flag;
    }
  }
  flag2=false;
toggle1(){
  if(this.selected===undefined){
    alert("please select student name first")
  }else{
  this.flag2=!this.flag2;}
}
submit(){
if(this.selected===undefined){
  alert("please select student name first")
}
else{
  this.operations.q_id=Math.random()*100000000;
  this.operations.firstoperand=this.operationform.value.firstoprand;  
  this.operations.secondoperand=this.operationform.value.secondoprand;  
  this.operations.operation=this.operationform.value.operation;
  this.operations.email=this.selected;
  this.operations.currectanswer=4*6;
  let op:any=this.operationform.value.operation;
  if(op=="*"){
  this.operations.currectanswer=Number(this.operationform.value.firstoprand)*Number(this.operationform.value.secondoprand);
  }else if (op=="-") {
    this.operations.currectanswer=Number(this.operationform.value.firstoprand)-Number(this.operationform.value.secondoprand); 
  } else if (op=="+"){
    this.operations.currectanswer=Number(this.operationform.value.firstoprand)+Number(this.operationform.value.secondoprand); 
  }else if (op=="/"){
    this.operations.currectanswer=Math.floor(Number(this.operationform.value.firstoprand)/Number(this.operationform.value.secondoprand)); 
  } 
  this.service.sendstudentquestion(this.operations).subscribe((x)=>{
    console.log(x);
  });
  }
}



}