import {Component} from '@angular/core'

@Component({
  'selector':'temp-comp',
  templateUrl:'./template.component.html'
})

export class TemplateComponent{
  public title:string='Template form';
  public name:string;
  public city:string;
  public state:string;
}