import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffenderSimpleProfileSkeletonComponent } from './offender-simple-profile-skeleton.component';

describe('OffenderSimpleProfileSkeletonComponent', () => {
  let component: OffenderSimpleProfileSkeletonComponent;
  let fixture: ComponentFixture<OffenderSimpleProfileSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffenderSimpleProfileSkeletonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffenderSimpleProfileSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
