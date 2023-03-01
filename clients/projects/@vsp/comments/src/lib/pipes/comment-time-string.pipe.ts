import { Pipe, PipeTransform } from '@angular/core';

import { formatDistance } from 'date-fns';

import { BaseComment } from '@vsp/core';

@Pipe({
  name: 'pjoCommentTimeString',
  standalone: true,
})
export class CommentTimeStringPipe implements PipeTransform {
  public transform(value: BaseComment): string {
    return formatDistance(new Date(value.createdOn), new Date());
  }
}
