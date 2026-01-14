import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoListComponent } from 'src/shared/component/todo-list/todo-list.component';
import { TodoFormComponent } from 'src/shared/component/todo-form/todo-form.component';
import { TodoDashboardComponent } from 'src/shared/component/todo-dashboard/todo-dashboard.component';
import { FormsModule} from '@angular/forms';

import {MatButtonModule} from '@angular/material/button';
import { MobileDashhComponent } from 'src/shared/component/mobile-dashh/mobile-dashh.component';
import { MobileFormComponent } from 'src/shared/component/mobile-form/mobile-form.component';
import { MobileListComponent } from 'src/shared/component/mobile-list/mobile-list.component';
import { ɵEmptyOutletComponent } from "@angular/router";
import { CarDashhComponent } from 'src/shared/component/car-dashh/car-dashh.component';
import { CarFormComponent } from 'src/shared/component/car-form/car-form.component';
import { CarListComponent } from 'src/shared/component/car-list/car-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoFormComponent,
    TodoDashboardComponent,
    MobileDashhComponent,
    MobileFormComponent,
    MobileListComponent,
    CarDashhComponent,
    CarFormComponent,
    CarListComponent,
    

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    ɵEmptyOutletComponent
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
