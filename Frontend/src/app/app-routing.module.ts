import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { ApprovedstudentsComponent } from './approvedstudents/approvedstudents.component';
import { ApprovestudentComponent } from './approvestudent/approvestudent.component';
import { CreatealertComponent } from './createalert/createalert.component';
import { Error404Component } from './error404/error404.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MessageComponent } from './message/message.component';
import { ProfessorDashboardComponent } from './professor-dashboard/professor-dashboard.component';
import { ProfessorGuard } from './professor.guard';
import { ProfessorComponent } from './professor/professor.component';
import { ProfessorprofileComponent } from './professorprofile/professorprofile.component';
import { SignupComponent } from './signup/signup.component';
import { StudentEnrollComponent } from './student-enroll/student-enroll.component';
import { StudentRequestsComponent } from './student-requests/student-requests.component';
import { StudentGuard } from './student.guard';
import { StudentComponent } from './student/student.component';
import { StudentcourseComponent } from './studentcourse/studentcourse.component';
import { StudenthomeComponent } from './studenthome/studenthome.component';
import { StudentloginComponent } from './studentlogin/studentlogin.component';
import { StudentprofileComponent } from './studentprofile/studentprofile.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"aboutus",component:AboutusComponent},
  {path:"signup",component:SignupComponent},
  {path:"login",component:LoginComponent,
   children:[
    {path:"",component:StudentloginComponent},
    {path:"professorlogin",component:AdminloginComponent}
  ]},

  {path:"student",canActivate:[StudentGuard],component:StudentComponent,
    children:[
      {path:"",component:StudenthomeComponent},
      {path:"enrollment",component:StudentEnrollComponent},
      {path:"message",component:MessageComponent},
      {path:"profile",component:StudentprofileComponent},
      {path:"course",component:StudentcourseComponent}

  ]},

  {path:"professor",canActivate:[ProfessorGuard],component:ProfessorComponent,
    children:[
       {path:"",component:ProfessorDashboardComponent},
       {path:"addcourse",component:AddcourseComponent},
       {path:"studentrequest",component:StudentRequestsComponent},
       {path:"approvestudent",component:ApprovestudentComponent},
       {path:"alertstudent",component:CreatealertComponent},
       {path:"approvedstudents",component:ApprovedstudentsComponent},
       {path:"profile",component:ProfessorprofileComponent},

  ]},
  {path:"**" , pathMatch: 'full',  component:Error404Component},






  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
