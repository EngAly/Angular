import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {


  // we use @Input decorator to get data from other component(parent) not normal property
  @Input() public parentName;

  // @Output decorator to 
  // send property from child component to parent component then show it in parent template
  @Output() public childEvent = new EventEmitter();

  constructor() { }

  /**
   * when event call this function will fill childEvent with this stream 
   * so that childEvent will has a value so constantly will update its value in parent
   * component
   */
  public getChildName() {
    return this.childEvent.emit("i child component")
  }

}
