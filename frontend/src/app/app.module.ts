import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatChipsModule} from '@angular/material/chips';
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatRadioModule} from '@angular/material/radio';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';


import { LayoutModule } from '@angular/cdk/layout';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { HomepageComponent } from './homepage/homepage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';

import { OTPComponent } from './otp/otp.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
 import { MatNativeDateModule } from '@angular/material/core';

import { MasterComponent } from './master/master.component';
import { StudentComponent } from './student/student.component';
import { NavbarComponent } from './navbar/navbar.component';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,

    HomepageComponent,

    OTPComponent,
    ForgotPasswordComponent,
    UpdatePasswordComponent,

    MasterComponent,
    StudentComponent,
    NavbarComponent,



 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
     MatIconModule,
    MatListModule,
    MatButtonModule,
    MatButtonModule,
    MatSidenavModule,
    MatChipsModule,
    MatInputModule,
    MatToolbarModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatRadioModule,
    MatDatepickerModule,
    MatSelectModule,
    HttpClientModule,
    MatDialogModule,
    MatGridListModule,
    MatMenuModule,
    DragDropModule,
    MatNativeDateModule
    
 
   
 
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
