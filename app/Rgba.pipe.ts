import {Pipe, PipeTransform} from 'angular2/core';
import {Color} from './Color';

@Pipe({name: 'rgba'})
export class RgbaPipe implements PipeTransform {

  transform(color:Color):string {
    return `rgba(${color.red}, ${color.green}, ${color.blue}, ${color.alpha})`;
  }

}
