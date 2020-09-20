import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

/**
 * you need to register service as a service if not will be as a regular class
 * will declare it in app.module so that is revealed for all component
 */
export class EmployeesService {

  constructor() { }

  public getemployees() {
    return [
      { "id": 1, "name": "ali", "salary": "3223" },
      { "id": 2, "name": "ahmed", "salary": "3232" },
      { "id": 3, "name": "amira", "salary": "4533" },
      { "id": 4, "name": "hoda", "salary": "333" },
    ]
  }



}

