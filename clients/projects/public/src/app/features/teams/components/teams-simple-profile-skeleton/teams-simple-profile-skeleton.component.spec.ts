import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsSimpleProfileSkeletonComponent } from './teams-simple-profile-skeleton.component';

describe('TeamsSimpleProfileSkeletonComponent', () => {
  let component: TeamsSimpleProfileSkeletonComponent;
  let fixture: ComponentFixture<TeamsSimpleProfileSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamsSimpleProfileSkeletonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamsSimpleProfileSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
