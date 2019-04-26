import {Pipe,PipeTransform} from '@angular/core'
@Pipe({
  name:'cube'
})

export class CubePipe implements PipeTransform{
  public transform(value:number,randNum:number){
    return value*value*value+randNum;
  }
}
