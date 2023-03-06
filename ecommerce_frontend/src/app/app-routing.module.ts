import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomepageComponent } from './homepage/homepage.component';
import { ProductComponent } from './product/product.component';

import { AuthGuard } from './services/auth.guard';


const routes: Routes = [
  {path:"",component:HomepageComponent},
  {path:"product",canActivate: [AuthGuard], component:ProductComponent}
 
  
  // {path:"home",component:NavbarComponent,canActivate:[AuthGuard], children:[
  //   {path:"dashboard",component:DashboardComponent},
 
  // ]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
