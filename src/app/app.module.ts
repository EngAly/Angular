import { EmployeesService } from './services/employees.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { T1InsideAppComponent } from './t1-inside-app/t1-inside-app.component';
import { T2BindingBasicsComponent } from './t2-binding-basics/t2-binding-basics.component';
import { T3EventsComponent } from './t3-events/t3-events.component';
import { T4DataBindingComponent } from './t4-data-binding/t4-data-binding.component';
import { ParentComponent } from './t5-compInteraction/parent/parent.component';
import { ChildComponent } from './t5-compInteraction/child/child.component';
import { T6PipesComponent } from './t6-pipes/t6-pipes.component';
import { T7ServiceComponent } from './t7-service/t7-service.component';
import { T8HttpComponent } from './t8-http/t8-http.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, routingComponent } from './t9-routing/app-routing.module';
import { BindData2modelComponent } from './t11-forms/bind-data2model/bind-data2model.component';





/**
 * note that when create new component angular automatic register its name direct
 * in NgModule declarations so that it work to diable it comment it to stop.
 */
@NgModule({
  declarations: [
    AppComponent,
    T1InsideAppComponent,
    T2BindingBasicsComponent,
    T3EventsComponent,
    T4DataBindingComponent,
    ParentComponent,
    ChildComponent,
    T6PipesComponent,
    T7ServiceComponent,
    T8HttpComponent,
    // this component have all other pages so that we import all those pages and make array
    // contain them and make this array exportable so that we import only this array with all
    // pages here 
    routingComponent,
    BindData2modelComponent
  ],
  imports: [
    BrowserModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [EmployeesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
