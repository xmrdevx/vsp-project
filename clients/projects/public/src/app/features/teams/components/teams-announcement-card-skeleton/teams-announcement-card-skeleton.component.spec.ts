import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsAnnouncementCardSkeletonComponent } from './teams-announcement-card-skeleton.component';

describe('TeamsAnnouncementCardSkeletonComponent', () => {
  let component: TeamsAnnouncementCardSkeletonComponent;
  let fixture: ComponentFixture<TeamsAnnouncementCardSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamsAnnouncementCardSkeletonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamsAnnouncementCardSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
