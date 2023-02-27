import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {IEmployee} from './employee';
import { interval } from 'rxjs';
import {Observable,of, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  private url : string="/assets/Data/EmployeeDetail.json";
  constructor(private http : HttpClient){}

  getEmployeeDetail(): Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this.url);
  }

  getTestname(){
    return 'Ankita';
  }

  getEmployees(){
    return[
      {"id": 1, "name" : "Ankita", "age": 26},
      {"id": 2, "name" : "Pranita", "age": 25},
      {"id": 3, "name" : "Aishwarya", "age": 27}
    ];
  }
}
