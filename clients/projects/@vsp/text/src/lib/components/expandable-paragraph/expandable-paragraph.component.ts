import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { NzTypographyModule } from 'ng-zorro-antd/typography';

@Component({
  selector: 'vsp-expandable-paragraph',
  templateUrl: './expandable-paragraph.component.html',
  styleUrls: ['./expandable-paragraph.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    NgIf,
    NzTypographyModule
  ]
})
export class ExpandableParagraphComponent {
  @Input()
  public text: string = '';

  @Input()
  public expandedLabel: string = 'Show More';

  @Input()
  public collapsedLabel: string = 'Show Less';

  @Input()
  public collapsedMaxLength: number = 300;

  @Input()
  public isExpanded: boolean = false;

  @Output()
  public textCollapsed: EventEmitter<void> = new EventEmitter<void>();

  @Output()
  public textExpanded: EventEmitter<void> = new EventEmitter<void>();

  public get textLength(): number {
    return this.text?.trim().length;
  }

  public get processedText(): string {
    return this.textLength > this.collapsedMaxLength 
      ? this.text?.trim().slice(0, this.collapsedMaxLength - 3) + '...'
      : this.text;
  }

  public toggle(): void {
    this.isExpanded = !this.isExpanded;
    if (this.isExpanded) this.textExpanded.emit();
    else this.textCollapsed.emit();
  }
}
