import {Component} from '@angular/core'
import {FormGroup,FormControl, Validators} from '@angular/forms'
@Component({
  'selector':'mod-comp',
  'templateUrl':'./model.form.component.html'
})

export class ModelFormComponent{
  public title:string='model form';
  public studentModel:FormGroup;
  constructor(){
    this.studentModel=new FormGroup({
      Name:new FormControl('',[Validators.required]),
      PersonalInfo:new FormGroup({Address:new FormGroup({
        City:new FormControl('',[Validators.email]),
        State:new FormControl
      })})      
    });
    this.studentModel.patchValue({
      Name:'nayank',
      PersonalInfo:{
        Address:{
          City:'Mumbai',
          State:'MH'
        }
      }
  });
  }
  
  public saveModel(data:FormGroup){
    console.log(JSON.stringify(data));
  }
}