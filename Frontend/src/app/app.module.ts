import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CoursesComponent } from './courses/courses.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { StudentloginComponent } from './studentlogin/studentlogin.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StudentComponent } from './student/student.component';
import { ProfessorComponent } from './professor/professor.component';
import { StudenthomeComponent } from './studenthome/studenthome.component';
import { StudentEnrollComponent } from './student-enroll/student-enroll.component';
import { ProfessorDashboardComponent } from './professor-dashboard/professor-dashboard.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    CoursesComponent,
    AdminloginComponent,
    StudentloginComponent,
    SignupComponent,
    StudentComponent,
    ProfessorComponent,
    StudenthomeComponent,
    StudentEnrollComponent,
    ProfessorDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
