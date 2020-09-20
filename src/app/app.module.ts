import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OpinionComponent } from './opinion/opinion.component';

@NgModule({
  declarations: [
    AppComponent,
    OpinionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [OpinionComponent]
})
export class AppModule { }
