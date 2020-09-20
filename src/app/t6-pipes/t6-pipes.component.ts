import { Component, OnInit } from '@angular/core';

@Component({
  selector: 't6-pipes',
  templateUrl: './t6-pipes.component.html',
  styleUrls: ['./t6-pipes.component.css']
})
export class T6PipesComponent {

  public name = "aly ahmed mohamed";

  public users = {
    "name": "aly ahmed",
    "age": 25,
    "phone": "1234567890976"
  };

  public date = new Date();
  
  constructor() { }


}
