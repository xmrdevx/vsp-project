import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffenderCaseSimpleProfileSkeletonComponent } from './offender-case-simple-profile-skeleton.component';

describe('OffenderCaseSimpleProfileSkeletonComponent', () => {
  let component: OffenderCaseSimpleProfileSkeletonComponent;
  let fixture: ComponentFixture<OffenderCaseSimpleProfileSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffenderCaseSimpleProfileSkeletonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffenderCaseSimpleProfileSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
