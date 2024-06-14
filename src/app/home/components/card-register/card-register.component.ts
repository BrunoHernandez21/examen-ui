import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-register',
  templateUrl: './card-register.component.html',
  styleUrls: ['./card-register.component.css']
})
export class CardRegisterComponent {

  constructor(private httpClient:HttpClient,private router: Router){

  }

  curp:string = "";

  sendCurp(){(
    this.httpClient.post(
      'http://localhost:8080/api/v1/appointment',
      {
        "curp":this.curp,
        "dateAppointment":"2023-06-13"
    }
    )).subscribe({
      next:(resp:any)=>{
        this.router.navigate(["user"]);
      }
    });
  }
}
