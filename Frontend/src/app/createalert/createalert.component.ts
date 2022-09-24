import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfessorService } from '../professor.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-createalert',
  templateUrl: './createalert.component.html',
  styleUrls: ['./createalert.component.css']
})
export class CreatealertComponent implements OnInit {

  courses=[{
    title:"",
    description:"",
    image:"",
  }]

 x = localStorage.getItem("pname")
  enrolldata={
    course:"",
    message:"",
    professor:this.x

  }

  constructor(private userService:UserService , private professorService:ProfessorService , private route:Router) { }

messagealert(){
   this.professorService.bulknotification(this.enrolldata).subscribe((data:any)=>{
    if(data.status){
      alert("Sucessfully Generated Alert");
    }else{
      alert("Error");
    }
   })
   location.reload();
  }

  ngOnInit(): void {
    this.userService.coursecomponent().subscribe((data)=>{
      this.courses=JSON.parse(JSON.stringify(data))
    })
  }

}
