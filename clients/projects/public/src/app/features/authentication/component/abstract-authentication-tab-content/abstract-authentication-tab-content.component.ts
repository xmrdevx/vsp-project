import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  template: ``,
  standalone: true,
  imports: []
})
export abstract class AbstractAuthenticationTabContentComponent {
  @Input()
  public selectedIndex: number = 0;

  @Output()
  public selectedIndexChange: EventEmitter<number> = new EventEmitter<number>();
}
