import { Component, OnInit } from '@angular/core';

@Component({
  selector: 't2-binding-basics',
  templateUrl: './t2-binding-basics.component.html',
  styleUrls: ['./t2-binding-basics.component.css']
})

/**
 * 1) work on some input features like id disabled and other
 * 2) work on how to change text color
 */
export class T2BindingBasicsComponent {

  public myId = "test";
  public disableInpt = true;
  public textState = "text-success";
  public fixed = true;

  public isError: boolean = false;

  //  toggle between two classes
  public toggleClass = {
    "text-success": !this.isError,
    "text-wrong": this.isError
  }

  // Style Binding
  public color = "blue";

  public style = {
    color: "red",
    fontSize: "22px"
  }


  constructor() { }


}
