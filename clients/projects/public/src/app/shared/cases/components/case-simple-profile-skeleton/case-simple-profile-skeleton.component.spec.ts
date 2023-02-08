import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseSimpleProfileSkeletonComponent } from './case-simple-profile-skeleton.component';

describe('CaseSimpleProfileSkeletonComponent', () => {
  let component: CaseSimpleProfileSkeletonComponent;
  let fixture: ComponentFixture<CaseSimpleProfileSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaseSimpleProfileSkeletonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseSimpleProfileSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
