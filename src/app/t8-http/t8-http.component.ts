import { HttpService } from './../services/http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 't8-http',
  templateUrl: './t8-http.component.html',
  styleUrls: ['./t8-http.component.css']
})
export class T8HttpComponent implements OnInit {

  public emps = [];
  public errorMessage;

  constructor(private httpservice: HttpService) { }

  ngOnInit(): void {
    this.httpservice.getEmployees().subscribe(
      data => this.emps = data,
      error => this.errorMessage = error
    );
  }





}
