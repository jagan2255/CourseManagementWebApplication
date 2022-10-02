import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private route:Router , public auth:AuthService) { }

  id=localStorage.getItem('email');

  ngOnInit(): void {
    this.auth.verifieduser(this.id)
  }

  btnclk1(){ 
    this.route.navigate(["/student/enrollment"])
  }

  btnclk2(){
    this.route.navigate(["/student/"])
  }

  btnclk3(){
    this.route.navigate(["/student/profile"])
  }

  btnclk4(){
  }

  btnclk5(){
    localStorage.clear()
    sessionStorage.clear()
    this.route.navigate(["/login"])

  }
  
  btnclk6(){
    this.route.navigate(["/student/course"])
  }

  btnclk7(){
    this.route.navigate(["/student/message"])
  }



}
