import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-student-enroll',
  templateUrl: './student-enroll.component.html',
  styleUrls: ['./student-enroll.component.css']
})
export class StudentEnrollComponent implements OnInit {

  x = localStorage.getItem('email')
  y = localStorage.getItem('username')

  courses=[{
    title:"",
    description:"",
    image:"",
  }]


  enrolldata={
    email:this.x,
    username:this.y,
    phonenumber:"",
    address:"",
    qualification:"",
    course:"",

  }

  

  constructor(private userService:UserService) { }

  enroll(){
    alert(this.enrolldata.course)
  }

  ngOnInit(): void {
    this.userService.coursecomponent().subscribe((data)=>{
      this.courses=JSON.parse(JSON.stringify(data))
    })
  }

}
