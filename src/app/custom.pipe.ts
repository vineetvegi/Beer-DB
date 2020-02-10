import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

      transform(value: string) {
        const limit = 200;
        const ellipsis = ' ...';

        return value.length > limit ? value.substr(0, limit) + ellipsis : value;
      }
    }


