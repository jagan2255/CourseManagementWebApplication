import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  server_address: string = 'http://localhost:3000';

  constructor(private http:HttpClient) { }

  enrollstudent(){
   return this.http.get(`${this.server_address}/student/enrollstudent`)
  }
}
