import { DepartmentsComponent } from './../t10-departments2details/departments/departments.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from '../t10-departments2details/details/details.component';

/**
 * note :-
 * when you navigate to any page will start from upper to botom
 * so that does't put ** in starting array
 */
const routes: Routes = [
  /**
   * full => for like url exactly so that not similar with other urls
   * when url on root url will direct navigate to home path after that will
   * match each component to go it and walk view page.
   * so will redirect if and only if FULL path is empty
   * note you can use PREFIX instead of FULL but prefix has problem that any url has empty->
   * so that it will match any url so we use full
   */
  { path: "", redirectTo: "/home", pathMatch: "full" },
  // when user hit home as a url will navigate to HomeComponent direct
  { path: "home", component: HomeComponent },
  { path: "page1", component: Page1Component },
  { path: "page2", component: Page2Component },
  { path: "departments", component: DepartmentsComponent },
  // :id mean that it is variable
  { path: "departments/:id", component: DetailsComponent },

  // ** match any thing (any url) that not mentioned in upper sub array
  { path: "**", component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [
  Page1Component, Page2Component, PageNotFoundComponent, HomeComponent,
  DepartmentsComponent,DetailsComponent
];