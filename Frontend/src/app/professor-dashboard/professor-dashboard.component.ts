import { Component, OnInit } from '@angular/core';
import { ProfessorService } from '../professor.service';

@Component({
  selector: 'app-professor-dashboard',
  templateUrl: './professor-dashboard.component.html',
  styleUrls: ['./professor-dashboard.component.css']
})
export class ProfessorDashboardComponent implements OnInit {
 
  datacount=[]


  constructor(private professorService:ProfessorService) { }

  ngOnInit(): void {
     this.professorService.getCount().subscribe((data)=>{
      console.log(data)
      this.datacount=JSON.parse(JSON.stringify(data))

     })
  }

}
