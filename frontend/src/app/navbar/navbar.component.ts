import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UserauthenticationService } from '../services/userauthentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private service:UserauthenticationService,private auth:AuthService,private route:Router) { }
  ngOnInit(): void {
  }


  logout1(){
    this.route.navigate([""]);
    this.auth.logout();
  
  }
}
