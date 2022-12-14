import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  server_address: string = 'http://localhost:3000';

  constructor(private http:HttpClient) { }

  enrollstudent(data:any){
   return this.http.post(`${this.server_address}/student/enrollstudent`,data).subscribe((data)=>{
    console.log(data)
   })
  }


  messagedata(id:any){
    return this.http.get(`${this.server_address}/student/messagedata/${id}`)
  }

  getprofile(id:any){
    return this.http.get(`${this.server_address}/student/profiledata/${id}`)

  }


}
