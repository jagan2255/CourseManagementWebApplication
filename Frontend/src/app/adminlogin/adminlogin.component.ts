import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  admin={

    email:"",
    password:"",
    role:"Professor"

  }

  constructor(private userService:UserService , private route:Router) { }


  adminlogin(){
    this.userService.professorlogin(this.admin).subscribe((res)=>{

      if(res.status){
        localStorage.setItem('tokens' , res.tokens)
        localStorage.setItem('pname' , res.name)
        localStorage.setItem('pemail' , res.email)
        this.route.navigate(['/professor'])

       }else{
        console.log(res.data)
        var error = res.data
        alert(error);
       }
    })
  }


  ngOnInit(): void {
  }



}
