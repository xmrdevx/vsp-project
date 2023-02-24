import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffenderFullProfileComponent } from './offender-full-profile.component';

describe('OffenderFullProfileComponent', () => {
  let component: OffenderFullProfileComponent;
  let fixture: ComponentFixture<OffenderFullProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffenderFullProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffenderFullProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
