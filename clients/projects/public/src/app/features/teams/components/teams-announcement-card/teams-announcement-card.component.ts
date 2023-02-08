import { NgIf, NgTemplateOutlet } from '@angular/common';
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCommentModule } from 'ng-zorro-antd/comment';

import { TeamAnnouncement, User } from '@vsp/core';
import { AnnouncementTimeStringPipe } from '../../pipes/announcement-time-string.pipe';

@Component({
  selector: 'vsp-teams-announcement-card',
  templateUrl: './teams-announcement-card.component.html',
  styleUrls: ['./teams-announcement-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true, 
  imports: [
    AnnouncementTimeStringPipe,
    NgIf,
    NgTemplateOutlet,
    NzAvatarModule,
    NzCardModule,
    NzCommentModule,
  ]
})
export class TeamsAnnouncementCardComponent {
  @Input()
  public announcement: TeamAnnouncement | null = null

  public get announcementAuthor(): string {
    const announcedBy: User | null = this.announcement?.announcedBy || null;
    return `${announcedBy?.profile?.firstName} ${announcedBy?.profile?.lastName} (${announcedBy?.userName})` || 'anonymous';
  }
}
