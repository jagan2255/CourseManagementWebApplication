import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private userService:UserService , private route:Router) { }

  signup(){
    this.userService.signup(this.user).subscribe((res)=>{

      if(res.status){
        this.route.navigate(['login'])
       }else{
        alert("Email already taken")
        window.location.reload();
       };
    });
};

  ngOnInit(): void {
  }

}
