import { PipeTransform, Pipe  } from '@angular/core';

@Pipe({
  name: 'limitToPipe'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, limit: number, trail: string) : string {
    return value.length > limit ? value.substring(0, limit) + trail || '...' : value;
  }

}