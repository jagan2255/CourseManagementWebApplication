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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StudentComponent } from './student/student.component';
import { ProfessorComponent } from './professor/professor.component';
import { StudenthomeComponent } from './studenthome/studenthome.component';
import { StudentEnrollComponent } from './student-enroll/student-enroll.component';
import { ProfessorDashboardComponent } from './professor-dashboard/professor-dashboard.component';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { StudentRequestsComponent } from './student-requests/student-requests.component';
import { ApprovestudentComponent } from './approvestudent/approvestudent.component';
import { ApprovedstudentsComponent } from './approvedstudents/approvedstudents.component';
import { CreatealertComponent } from './createalert/createalert.component';
import { MessageComponent } from './message/message.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { StudentprofileComponent } from './studentprofile/studentprofile.component';
import { StudentcourseComponent } from './studentcourse/studentcourse.component';
import { ProfessorprofileComponent } from './professorprofile/professorprofile.component'
import { AuthService } from './auth.service';
import { ProfessorService } from './professor.service';
import { StudentService } from './student.service';
import { TokenInterceptorService } from './token-interceptor.service';
import { Error404Component } from './error404/error404.component';

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
    ProfessorDashboardComponent,
    AddcourseComponent,
    StudentRequestsComponent,
    ApprovestudentComponent,
    ApprovedstudentsComponent,
    CreatealertComponent,
    MessageComponent,
    AboutusComponent,
    StudentprofileComponent,
    StudentcourseComponent,
    ProfessorprofileComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    ProfessorService,
    StudentService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptorService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
