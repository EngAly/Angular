import { IEmployee } from '../interfaces/IEmployee'
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

/**
 * HttpService to get http data from request
 * note we use special class (i.e service) to seperate component about buesiness logic
 * Documentation
 * Http, Observable  and RxJs
 * 1) http get request from this service
 * 2) receive the observable and cast it into an employee array
 * 3) subscribe to the observable from components
 * 4) assign the employee array to a local variable 
 */
export class HttpService {

  private url = "assets/data/employees.json";

  constructor(private http: HttpClient) { }

  /**
   * 1) method that is responsible to get data from the server to consume it 
   * any component.
   * 2) then if there error will handle it like resource Not Found.
   */
  getEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this.url)
      .pipe(
        retry(1), catchError(error => { return throwError(error.message) }
        ));
  }



}
