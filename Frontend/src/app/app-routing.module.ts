import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfessorDashboardComponent } from './professor-dashboard/professor-dashboard.component';
import { ProfessorComponent } from './professor/professor.component';
import { SignupComponent } from './signup/signup.component';
import { StudentEnrollComponent } from './student-enroll/student-enroll.component';
import { StudentRequestsComponent } from './student-requests/student-requests.component';
import { StudentComponent } from './student/student.component';
import { StudenthomeComponent } from './studenthome/studenthome.component';
import { StudentloginComponent } from './studentlogin/studentlogin.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"signup",component:SignupComponent},
  {path:"login",component:LoginComponent,
   children:[
    {path:"",component:StudentloginComponent},
    {path:"professorlogin",component:AdminloginComponent}
  ]},

  {path:"student",component:StudentComponent,
    children:[
      {path:"",component:StudenthomeComponent},
      {path:"enrollment",component:StudentEnrollComponent}
  ]},

  {path:"professor",component:ProfessorComponent,
    children:[
       {path:"",component:ProfessorDashboardComponent},
       {path:"addcourse",component:AddcourseComponent},
       {path:"studentrequest",component:StudentRequestsComponent}
  ]}





  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
