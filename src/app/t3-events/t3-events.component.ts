import { Component, OnInit } from '@angular/core';

@Component({
  selector: 't3-events',
  templateUrl: './t3-events.component.html',
  styleUrls: ['./t3-events.component.css']
})

/**
 * 1) Event Binding
 * 2) Template Reference Variables
 */
export class T3EventsComponent {

  public message = "old message";

  constructor() { }

  alertClick() {
    alert("alert message");
  }

  changeMessageClick() {
    this.message = "new message";
  }

  clickWithVar(event) {
    alert(event.type);
  }

  getMessage1(handler) {
    var transient=handler.value;
    alert(transient)
  }

}
