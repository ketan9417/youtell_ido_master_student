import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomepageComponent } from './homepage/homepage.component';
import { MasterComponent } from './master/master.component';


import { AuthGuard } from './services/auth.guard';
import { StudentComponent } from './student/student.component';


const routes: Routes = [
  {path:"",component:HomepageComponent},

  {path:"student",canActivate: [AuthGuard], component:StudentComponent},
  {path:"master",canActivate: [AuthGuard], component:MasterComponent}
  // {path:"home",component:NavbarComponent,canActivate:[AuthGuard], children:[
  // {path:"dashboard",component:DashboardComponent},
  // ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
