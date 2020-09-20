import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  public deptId: number;
  constructor(private activeRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    /**
   * grap paramter from route snapshot (url);
   * note there drawback in this method using snapshot that snapshot not update
   * so that we use subscribe
   */
    // this.deptId = parseInt(this.activeRoute.snapshot.paramMap.get('id'))
    this.activeRoute.paramMap.subscribe((param: ParamMap) =>
      this.deptId = parseInt(param.get("id"))
    )

 
  }


  public goNext() {
    let nextId = this.deptId + 1;
    //note that if developer change departments url in routing model so that you need to change all
    // departments urls in all childs because it is register static so that we will comment
    // static url and use another method

    // this.router.navigate(["departments", next])

    // router become more flexible so that we can change url as you want
    this.router.navigate(['../', nextId], { relativeTo: this.activeRoute })
  }

  public goPrevious() {
    let previous = this.deptId - 1;
    this.router.navigate(['../', previous], { relativeTo: this.activeRoute })
  }
  public goToDepartments() {
    let selectedId = this.deptId ? this.deptId : null;
    this.router.navigate(['../', { id: selectedId }], { relativeTo: this.activeRoute })
  }
}
