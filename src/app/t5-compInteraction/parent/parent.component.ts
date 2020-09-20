import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})

/**
 * component interaction
 * 1) parent AppComponent
 * 2) child testComponent
 * => to pass data from parent to child (@input)
 * => to pass data from child to parent (@output)
 */
export class ParentComponent {

  // will pass this property to child component
  public name = "ali ahmed mohamed";

  public message2parent;

  constructor() { }


}
