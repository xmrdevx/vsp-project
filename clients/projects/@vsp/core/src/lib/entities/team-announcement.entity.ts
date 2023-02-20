import { BaseEntity } from './base.entity';
import { Comment } from './comment.entity';
import { Team } from './team.entity';
import { User } from './identity/user.entity';

export interface TeamAnnouncement extends BaseEntity {
  message: string,
  teamId: string,
  team?: Team,
  announcedById: string,
  announcedBy?: User,
  comments?: Comment[]
}
