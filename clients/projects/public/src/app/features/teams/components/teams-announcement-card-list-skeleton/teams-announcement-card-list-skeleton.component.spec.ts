import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsAnnouncementCardListSkeletonComponent } from './teams-announcement-card-list-skeleton.component';

describe('TeamsAnnouncementCardListSkeletonComponent', () => {
  let component: TeamsAnnouncementCardListSkeletonComponent;
  let fixture: ComponentFixture<TeamsAnnouncementCardListSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamsAnnouncementCardListSkeletonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamsAnnouncementCardListSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
