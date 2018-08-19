import {Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Pipe({
  name: 'safe'
})
export class SafePipe implements PipeTransform {
  constructor(private  _sanitizer: DomSanitizer) {
  }
  transform(value: any, type: string): any {
    return this._sanitizer.bypassSecurityTrustUrl(value);
  }

}
