import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissingPersonSimpleProfileSkeletonComponent } from './missing-person-simple-profile-skeleton.component';

describe('MissingPersonSimpleProfileSkeletonComponent', () => {
  let component: MissingPersonSimpleProfileSkeletonComponent;
  let fixture: ComponentFixture<MissingPersonSimpleProfileSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissingPersonSimpleProfileSkeletonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MissingPersonSimpleProfileSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
