import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-studenthome',
  templateUrl: './studenthome.component.html',
  styleUrls: ['./studenthome.component.css']
})
export class StudenthomeComponent implements OnInit {

  id=localStorage.getItem('email');


  constructor(private auth:AuthService) { }

  ngOnInit(): void {
    this.auth.verifieduser(this.id)

  }

}
