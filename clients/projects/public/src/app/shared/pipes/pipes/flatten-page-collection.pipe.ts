import { Pipe, PipeTransform } from '@angular/core';
import { Page } from '@vsp/core';

@Pipe({
  name: 'pjoFlattenPageCollection',
  standalone: true
})
export class FlattenPageCollectionPipe implements PipeTransform {
  public transform(pages: Page<any>[]): any[] {
    return pages.flatMap(page => page.elements);
  }
}
