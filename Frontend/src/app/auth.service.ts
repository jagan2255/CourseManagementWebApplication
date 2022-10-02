import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  server_address: string = 'http://localhost:3000';


  constructor(public http:HttpClient) { }

  getToken(){
    return localStorage.getItem("token")
  }

  gettokens(){
    return localStorage.getItem("tokens")

  }

  studentloggedIn(){
    return !!localStorage.getItem('token')
  }

  professorloggedIn(){
    return !!localStorage.getItem("tokens")
  }

  verifieduser(id:any){
    return this.http.post(`${this.server_address}/student/checkverified`,{id:id}).subscribe((data)=>{
     sessionStorage.setItem('verified','true');
    });

  }

  userverified(){
    return !!sessionStorage.getItem('verified');
  }


}
