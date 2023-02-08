import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreOffenderDialogContentComponent } from './explore-offender-dialog-content.component';

describe('ExploreOffenderDialogContentComponent', () => {
  let component: ExploreOffenderDialogContentComponent;
  let fixture: ComponentFixture<ExploreOffenderDialogContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExploreOffenderDialogContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreOffenderDialogContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
