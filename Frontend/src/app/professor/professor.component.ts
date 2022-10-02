import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.css']
})
export class ProfessorComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  btnclk2(){ 
    this.route.navigate(["/professor"])
  }

  btnclk1(){
    this.route.navigate(["/professor/profile"])

  }

  btnclk3(){
    this.route.navigate(["/professor/approvedstudents"])

  }

  btnclk4(){
    this.route.navigate(["/professor/addcourse"])
  }

  btnclk5(){
    localStorage.clear()
    this.route.navigate(["/login/professorlogin"])
  }
  
  btnclk6(){
    this.route.navigate(["/professor/alertstudent"])
  }
  btnclk7(){
    this.route.navigate(["/professor/studentrequest"])
  }

}
