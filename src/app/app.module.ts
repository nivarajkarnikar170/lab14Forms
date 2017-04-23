import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// use FormsModule Only when using Template Driven Forms
import { FormsModule } from '@angular/forms';
// use ReactiveFormsModule Only when using Template Driven Forms
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MyDataDrivenFormComponent } from './my-data-driven-form/my-data-driven-form.component';
import { MyServiceService } from './my-service.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent, 
    MyDataDrivenFormComponent
  ],
  // to use Forms we must have FormsModule OR ReactiveFormsModule Here
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [MyServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
