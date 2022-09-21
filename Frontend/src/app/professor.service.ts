import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  server_address: string = 'http://localhost:3000';

  constructor(private http:HttpClient) { }

  getCount(){
   return this.http.get(`${this.server_address}/professor/getcount`)
  }

  getrequest(){
    return this.http.get(`${this.server_address}/professor/getrequest`)
  }

  rejectstudent(id:any){
    return this.http.delete(`${this.server_address}/professor/deletreq/${id}`,)
  }

}
