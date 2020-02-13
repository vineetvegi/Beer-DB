import { BeerComponent } from './beer/beer.component';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
 name: 'truncate'
})

export class TruncatePipe implements PipeTransform {
// It truncates the description if the length is more than 20 words by adding '...'. 
transform(value: string, args: string[]): string { 
    const limit = 20;
    const trail = '...';
    const values = value.split(' ');
    const trunc = values.slice(0, limit).join(' ');
    // tslint:disable-next-line:triple-equals
    if (args[0] != args[1] || args[0] == null) {
      if (values.length <= limit) {
      return value;
      } else {
      return trunc + trail;
      }
      } else {
      return value;
      }
}
}
