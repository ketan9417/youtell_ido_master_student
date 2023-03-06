import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UserauthenticationService } from '../services/userauthentication.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private service:UserauthenticationService,private auth:AuthService,private route:Router) { }
productdata:any;
cartitem:any=0;
  ngOnInit(): void {
    this.service.getproductdata().subscribe(x=>{
this.productdata=x;
console.log(x);

    })
  }

msg:any="Add to cart";
  cart(){
this.cartitem +=1;
  }
logout1(){
  this.route.navigate([""]);
  this.auth.logout();

}

}
