import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfessorService } from '../professor.service';

@Component({
  selector: 'app-approvestudent',
  templateUrl: './approvestudent.component.html',
  styleUrls: ['./approvestudent.component.css']
})
export class ApprovestudentComponent implements OnInit {

  constructor(private professorService:ProfessorService , private route:Router) { }

  data = localStorage.getItem('uid')


  enrolldata={
    email:"",
    username:"",
    phonenumber:"",
    address:"",
    qualification:"",
    course:"",
    id:this.data

  }

  enroll(){
    this.professorService.approvedstudent(this.enrolldata)
    alert("Sucessfully Approved Student")
    this.route.navigate(["/professor/studentrequest"])
  }


  ngOnInit(): void {
    this.professorService.approvestudent(this.data).subscribe((data)=>{
      this.enrolldata=JSON.parse(JSON.stringify(data))

    })
  }

}
