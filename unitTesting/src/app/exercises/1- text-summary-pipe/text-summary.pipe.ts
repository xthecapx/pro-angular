import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textSummary'
})
export class TextSummaryPipe implements PipeTransform {

  // What should be test
  // 1. If not value return empty
  // 2. If no args, value.length <= 10 TRUE, should return value
  // 3. If no args, value.length <= 10 FALSE, should return value + ...
  // 4. If args, value.length <= args TRUE, should return value
  // 5. If args, value.length <= args FALSE, should return value + ...
  transform(value: any, args?: any): any {
    if (!value)
      return '';

    const limit = args || 10;
    return (value.length <= limit) ? value : value.substr(0, limit) + '...';
  }
}
