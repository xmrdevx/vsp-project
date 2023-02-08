import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsAnnouncementCardListComponent } from './teams-announcement-card-list.component';

describe('TeamsAnnouncementCardListComponent', () => {
  let component: TeamsAnnouncementCardListComponent;
  let fixture: ComponentFixture<TeamsAnnouncementCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamsAnnouncementCardListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamsAnnouncementCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
