import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls:['./employee.component.css']

})
export class EmployeeComponent{
firstname:string='Karthi';
lastname:string='Kailash';
gender:string='Male';
age:number=29;
}
 
