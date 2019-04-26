import {Component} from '@angular/core'

@Component({
  'selector':'log-comp',
  templateUrl:'./model.login.component.html'
})
export class ModelLoginComponent{
  public title:string='Login Form';

  public amount=100;

  public todaysDate=new Date();

  public num12=5;
}