import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

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

  constructor(private userService:UserService) { }

  signup(){
    this.userService.signup(this.user)
  }

  ngOnInit(): void {
  }

}
