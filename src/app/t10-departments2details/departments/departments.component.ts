import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {

  public selectedId: number;

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe((param: ParamMap) => {
       this.selectedId = parseInt(param.get("id"))
       // For Testing
      // if (param.get("name") != null) {
      //   alert(param.get("name"))
      // }
    }
    )
  }

  // should make property public to make view access it
  public departments = [
    { "id": 1, "name": "Angular" },
    { "id": 2, "name": "React" },
    { "id": 3, "name": "SpringBoot" },
    { "id": 4, "name": "JSF" }
  ];

  constructor(private activeRoute: ActivatedRoute, private route: Router) { }

  public getDepDetails(dept: any) {
    //note that if developer change departments url in routing model so that you need to change all
    // departments urls in all childs because it is register static so that we will comment
    // static url and use another method
    // this.route.navigate(["departments", dept.id])

    // let pathWithoutParam=this.route.url.split(';')[0];
    this.route.navigate([dept.id],{relativeTo:this.activeRoute})
    // this.route.navigate([dept.id],{relativeTo:this.route.url.split(';')[0]})

     
 
  }
  public isSelectd(dept: any) {
    return dept.id === this.selectedId;
  }

}
