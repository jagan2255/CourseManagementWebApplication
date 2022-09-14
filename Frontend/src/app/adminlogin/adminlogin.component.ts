import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  admin={

    email:"",
    password:""

  }

  constructor() { }

  adminlogin(){
   alert("Sucess")
  }

  ngOnInit(): void {
  }



}
