import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pjoEllipsis',
  standalone: true,
})
export class EllipsisPipe implements PipeTransform {
  public transform(value: string, length: number): string {
    return value.substring(0, length) + '...';
  }
}
