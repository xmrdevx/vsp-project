import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pjoAge',
  standalone: true,
})
export class AgePipe implements PipeTransform {
  public transform(dob: Date | undefined | null): number {
    if (!dob) return 0;
    const birthDate = new Date(dob);
    const timeDifference = Math.abs(Date.now() - birthDate.getTime());
    return Math.floor((timeDifference / (1000 * 3600 * 24)) / 365);
  }
}
