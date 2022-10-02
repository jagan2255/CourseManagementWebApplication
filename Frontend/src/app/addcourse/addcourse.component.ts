import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfessorService } from '../professor.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent implements OnInit {

  
  coursedata={
    course:"",
    message:"",
    imageurl:""
  }

  constructor(private userService:UserService , private professorService:ProfessorService , private route:Router) { }

messagealert(){
   this.professorService.addcourse(this.coursedata).subscribe((data:any)=>{
    if(data.status){
      alert("Sucessfully Added Course");
    }else{
      alert("Error");
    }
   })
   location.reload();
  }

  ngOnInit(): void {
    
  }

}

