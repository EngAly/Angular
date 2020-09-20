import { User } from './../../classes/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bind-data2model',
  templateUrl: './bind-data2model.component.html',
  styleUrls: ['./bind-data2model.component.css']
})
export class BindData2modelComponent  {

userData=new User("angular","");

   
}
