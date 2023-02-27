import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';
@Component({
  selector: 'app-testcomponent',
  template:`
  <h2> Welcome {{name}} </h2>
  <h3> {{name | uppercase}} </h3>
  <h3> {{name | titlecase}} </h3>
  <h3> {{name | slice : 3: 5}} </h3>
  <h2>Below text is displayed using service call</h2>
  <ul *ngFor="let employee of employee">
    <li>{{employee.name}}</li>
  </ul>
  <h2>Below text is displayed through http request using observable and subscriber</h2>
  <ul *ngFor="let employee of employeeDetail">
  <li>{{employee.name}}</li>
</ul>
  `,
  styleUrls: []
})
export class TestcomponentComponent implements OnInit {
  public name="";
  public employee =<any>[];
  public employeeDetail =<any>[];
  constructor(private _testservice  : TestService) { }
  
  ngOnInit(){
    this.name = this._testservice.getTestname();

    this.employee= this._testservice.getEmployees();
    this._testservice.getEmployeeDetail().subscribe(data => this.employeeDetail = data);
  }

}
