import { Component, OnInit } from '@angular/core';
import { ProfessorService } from '../professor.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-professor-dashboard',
  templateUrl: './professor-dashboard.component.html',
  styleUrls: ['./professor-dashboard.component.css']
})
export class ProfessorDashboardComponent implements OnInit {
 
  datacount=[]

  studentData=
  [{
    email:"",
    username:"",
    qualification:"",
    course:"",
    address:"",
    phonenumber:"",
    datejoin:""
  }]

  


  constructor(private professorService:ProfessorService) { }

  ngOnInit(): void {
     this.professorService.getCount().subscribe((data)=>{
      console.log(data)
      this.datacount=JSON.parse(JSON.stringify(data))
     })


      this.professorService.getapprovedstudent().subscribe((data)=>{
      this.studentData = JSON.parse(JSON.stringify(data))
    })
  }

}
