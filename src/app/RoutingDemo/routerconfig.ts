import {Routes} from '@angular/router';
import {AdminComponent} from './admin.component';
import {StudentComponent} from './student.component';
export const myOwnRouter:Routes=[
  {path:'',compoent:AdminComponent},
  {path:'student',compoent:StudentComponent}
]