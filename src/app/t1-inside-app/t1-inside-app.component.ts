import { Component, OnInit } from '@angular/core';

@Component({
  /**
   * you can use three selectors types
   * 1) custome selector => and use it a custom html tag i.e <t1-inside-app />
   * 2) class selector => and use it in another html tag like div <div class="t1-inside-app" />
   * 3) as attribute selector: '[t1-inside-app]' => in html div <div t1-inside-app />
   */
  selector: 't1-inside-app',
  /**
   * you can use template '<div>any test</div>' you can use backtick `` for multi-line
   */
  templateUrl: './t1-inside-app.component.html',
  /**
   * you can use styles
   */
  styleUrls: ['./t1-inside-app.component.css']
})
export class T1InsideAppComponent {

  public name = "child inner app";
  public pageUrl = window.location.href;

  constructor() { }

  geteName() {
    return "what name is ? my name is " + this.name;
  }

}
