import { Component, OnInit } from '@angular/core';
import { ProfessorService } from '../professor.service';

@Component({
  selector: 'app-approvedstudents',
  templateUrl: './approvedstudents.component.html',
  styleUrls: ['./approvedstudents.component.css']
})
export class ApprovedstudentsComponent implements OnInit {

  studentData=
  [{
    email:"",
    username:"",
    qualification:"",
    course:"",
    address:"",
    phonenumber:""
  }]

  constructor(private professorService:ProfessorService) { }

  rejectstudent(id: any){
    if(confirm(`Are you sure Want to Delete ${id.username}`)){
    this.professorService.rejectapprovedstudent(id._id).subscribe((data)=>{
      this.studentData=this.studentData.filter(p=>p!==id)
    })
   }
  }


  ngOnInit(): void {
    this.professorService.getapprovedstudent().subscribe((data)=>{
      this.studentData = JSON.parse(JSON.stringify(data))
    })
  }

}
