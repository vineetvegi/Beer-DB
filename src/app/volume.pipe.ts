import { BeerComponent } from './beer/beer.component';
import { Pipe, PipeTransform } from '@angular/core';
import { __values } from 'tslib';


@Pipe({
 name: 'volume'
})

export class VolumePipe implements PipeTransform {

transform(value: number): string {
  return value * 0.26 +  ' glns';

}

}
