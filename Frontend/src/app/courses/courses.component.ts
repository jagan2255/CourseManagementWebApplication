import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses=[{
    title:"",
    description:"",
    image:"",
  }]

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.coursecomponent().subscribe((data)=>{
      this.courses=JSON.parse(JSON.stringify(data))
    })
  }

}
