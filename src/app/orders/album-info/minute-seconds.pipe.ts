import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'minuteSeconds'
})
export class MinuteSecondsPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const seconds: number = Math.floor(value / 1000);
    const minutes: number = Math.round(Math.floor(seconds / 60));
    return minutes + 'min' + ':' + seconds + 'sec';
  }

}
