import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
 
  isSaved: string;

  ngOnInit(): void {
    setTimeout(() => {
      this.isSaved = 'success';
      // this.isSaved = 'fail';
    }, 1000);
  }


  title = 'demo';




  
}
