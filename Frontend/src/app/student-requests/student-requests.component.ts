import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfessorService } from '../professor.service';

@Component({
  selector: 'app-student-requests',
  templateUrl: './student-requests.component.html',
  styleUrls: ['./student-requests.component.css']
})
export class StudentRequestsComponent implements OnInit {

  studentData=
  [{
    email:"",
    username:"",
    qualification:"",
    course:"",
  }]

  constructor(private professorService:ProfessorService , private route:Router) { }

  rejectstudent(id: any){
    if(confirm(`Are you sure Want to delete ${id.username}`)){
    this.professorService.rejectstudent(id._id).subscribe((data)=>{
      this.studentData=this.studentData.filter(p=>p!==id)
    })
   }
  }

  ngOnInit(): void {
    this.professorService.getrequest().subscribe((data)=>{
      this.studentData=JSON.parse(JSON.stringify(data))

    })
  }

}
