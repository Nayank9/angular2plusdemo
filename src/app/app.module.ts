import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {ModelFormComponent} from './model.form.component';
import {TemplateComponent} from './template.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ,ReactiveFormsModule],
  declarations: [ AppComponent, HelloComponent ,ModelFormComponent,TemplateComponent],
  bootstrap:    [ AppComponent ,ModelFormComponent,TemplateComponent]
})
export class AppModule { }
