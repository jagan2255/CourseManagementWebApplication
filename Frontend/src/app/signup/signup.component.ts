import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user={
    email:"",
    username:"",
    password:"",
    confpass:"",
    role:"",
    checkbox:false
  }

  constructor() { }

  signup(){
    alert(this.user.role)
  }

  ngOnInit(): void {
  }

}
