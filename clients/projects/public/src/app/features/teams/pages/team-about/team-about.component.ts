import { Component, ChangeDetectionStrategy } from '@angular/core';

import { fadeAnimation } from '@vsp/core';

@Component({
  selector: 'vsp-team-about',
  templateUrl: './team-about.component.html',
  styleUrls: ['./team-about.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeAnimation],
  standalone: true,
  imports: [
    
  ]
})
export class TeamAboutComponent { }
