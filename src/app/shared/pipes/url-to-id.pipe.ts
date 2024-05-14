import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'urlToId',
})
export class UrlToIdPipe implements PipeTransform {
  transform(value: string): string {
    let url = value.split('/');
    return url[url.length - 1];
  }
}
