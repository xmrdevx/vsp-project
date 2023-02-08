import { Pipe, PipeTransform } from '@angular/core';

import { formatDistance } from 'date-fns';

import { TeamAnnouncement } from '@vsp/core';

@Pipe({
  name: 'pjoAnnouncementTimeString',
  standalone: true,
})
export class AnnouncementTimeStringPipe implements PipeTransform {
  public transform(value: TeamAnnouncement | null): string {
    return formatDistance(new Date(value?.createdOn ?? new Date()), new Date());
  }
}
