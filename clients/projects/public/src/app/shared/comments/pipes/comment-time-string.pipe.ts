import { Pipe, PipeTransform } from '@angular/core';

import { formatDistance } from 'date-fns';

import { Comment } from '@vsp/core';

@Pipe({
  name: 'pjoCommentTimeString',
  standalone: true,
})
export class CommentTimeStringPipe implements PipeTransform {
  public transform(value: Comment): string {
    return formatDistance(new Date(value.commentedOn), new Date());
  }
}
