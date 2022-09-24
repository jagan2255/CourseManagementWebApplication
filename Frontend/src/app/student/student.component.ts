import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  btnclk1(){ 
    this.route.navigate(["/student/enrollment"])
  }

  btnclk2(){
  }

  btnclk3(){
  }

  btnclk4(){
  }

  btnclk5(){
  }
  
  btnclk6(){
  }
  btnclk7(){
    this.route.navigate(["/student/message"])

  }



}
