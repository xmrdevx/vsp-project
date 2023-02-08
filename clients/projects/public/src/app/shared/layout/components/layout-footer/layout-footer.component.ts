import { NgFor, NgIf } from '@angular/common';
import { Component, ChangeDetectionStrategy, HostBinding, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { NavigationLink } from '@vsp/core';

@Component({
  selector: 'vsp-layout-footer',
  templateUrl: './layout-footer.component.html',
  styleUrls: ['./layout-footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    RouterLink 
  ]
})
export class LayoutFooterComponent {
  @HostBinding('class')
  public hostClasses: string = 'p-0 w-100 bordered-top';

  @Input()
  public links: NavigationLink[] | null = null;
}
