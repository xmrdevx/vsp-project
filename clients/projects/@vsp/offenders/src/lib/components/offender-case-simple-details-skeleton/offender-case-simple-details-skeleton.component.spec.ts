import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffenderCaseSimpleDetailsSkeletonComponent } from './offender-case-simple-details-skeleton.component';

describe('OffenderCaseSimpleDetailsSkeletonComponent', () => {
  let component: OffenderCaseSimpleDetailsSkeletonComponent;
  let fixture: ComponentFixture<OffenderCaseSimpleDetailsSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffenderCaseSimpleDetailsSkeletonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffenderCaseSimpleDetailsSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
