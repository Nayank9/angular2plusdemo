import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {ModelFormComponent} from './model.form.component';
import {TemplateComponent} from './template.component';
import {ModelLoginComponent} from './model.login.component';
import {CubePipe} from './cube.pipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule ,ReactiveFormsModule],
  declarations: [ AppComponent, HelloComponent ,ModelFormComponent,TemplateComponent,ModelLoginComponent,CubePipe],
  bootstrap:    [ AppComponent ,ModelFormComponent,TemplateComponent,ModelLoginComponent]
})
export class AppModule { }
