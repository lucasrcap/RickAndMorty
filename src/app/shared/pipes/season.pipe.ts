import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'season',
})
export class SeasonPipe implements PipeTransform {
  transform(value: string): number {
    return parseInt(value.substring(1, 3));
  }
}
