import { Pipe, PipeTransform } from '@angular/core';

export type EnumItem = {
  index: number,
  name: string
};

@Pipe({
  name: 'enumToArray',
  standalone: true,
})
export class EnumToArrayPipe implements PipeTransform {
  public transform(value: any, ...args: unknown[]): EnumItem[] {
    return Object.keys(value)
      .filter(e => !isNaN(+e)).map(o => { return {index: +o, name: value[o]}});
  }
}
