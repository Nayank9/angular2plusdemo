import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {ModelFormComponent} from './model.form.component';
import {TemplateComponent} from './template.component';
import {ModelLoginComponent} from './model.login.component';
import {CubePipe} from './cube.pipe';
import {CollegeComponent} from './RoutingDemo/college.component';
import {AdminComponent} from './RoutingDemo/admin.component';
import {StudentComponent} from './RoutingDemo/student.component';
import {myOwnRouter} from './RoutingDemo/routerconfig';
@NgModule({
  imports:      [ BrowserModule, FormsModule ,ReactiveFormsModule, RouterModule.forRoot(myOwnRouter)],
  declarations: [ AppComponent, HelloComponent ,ModelFormComponent,TemplateComponent,ModelLoginComponent,CubePipe,CollegeComponent,AdminComponent,StudentComponent],
  bootstrap:    [ AppComponent ,ModelFormComponent,TemplateComponent,ModelLoginComponent,CollegeComponent]
})
export class AppModule { }
