import { EmployeesService } from './../services/employees.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 't7-service',
  templateUrl: './t7-service.component.html',
  styleUrls: ['./t7-service.component.css']
})
export class T7ServiceComponent implements OnInit {

  public employees=[];
  
  constructor(private empService: EmployeesService) { }

  ngOnInit(): void {
    this.employees=this.empService.getemployees();
  }

}
