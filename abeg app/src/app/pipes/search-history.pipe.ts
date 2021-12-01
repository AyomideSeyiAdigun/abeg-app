import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchHistory'
})
export class SearchHistoryPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
