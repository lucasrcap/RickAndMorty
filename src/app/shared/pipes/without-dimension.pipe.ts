import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'withoutDimension',
})
export class WithoutDimensionPipe implements PipeTransform {
  transform(value: string): unknown {
    return value.replace('Dimension', '');
  }
}
