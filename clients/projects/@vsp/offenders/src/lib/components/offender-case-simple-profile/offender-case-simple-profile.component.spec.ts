import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffenderCaseSimpleProfileComponent } from './offender-case-simple-profile.component';

describe('OffenderCaseSimpleProfileComponent', () => {
  let component: OffenderCaseSimpleProfileComponent;
  let fixture: ComponentFixture<OffenderCaseSimpleProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffenderCaseSimpleProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffenderCaseSimpleProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
