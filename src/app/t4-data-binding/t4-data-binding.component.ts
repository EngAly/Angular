import { Component, OnInit } from '@angular/core';

@Component({
  selector: 't4-data-binding',
  templateUrl: './t4-data-binding.component.html',
  styleUrls: ['./t4-data-binding.component.css']
})

/**
 * 1) two way data binding
 * two way data binding i.e pass data from class to template use [] is called data-binding
 * and pass data from template to class (as events) we use () called event-binding
 * so that to use two way data binding
 * we use [()] angular comunity suggest panana in the box.
 * 
 * 2) structure directives
 * => add or remove html elements
 * ngIf, ngFor, ngSwitch
 *  a) ngIf
 *  b) ngSwitch
 *  c) ngFor
 * 
 */
export class T4DataBindingComponent {

  public name = ""
  public isShown:boolean=false;
  public color:string="grseen";
  public colors=[1,2,3,4,5,6,7];

  constructor() { }


}
