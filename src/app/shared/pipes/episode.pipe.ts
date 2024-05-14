import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'episode',
})
export class EpisodePipe implements PipeTransform {
  transform(value: string): number {
    return parseInt(value.substring(4, 6));
  }
}
