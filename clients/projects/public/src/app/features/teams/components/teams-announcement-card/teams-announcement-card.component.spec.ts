import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsAnnouncementCardComponent } from './teams-announcement-card.component';

describe('TeamsAnnouncementCardComponent', () => {
  let component: TeamsAnnouncementCardComponent;
  let fixture: ComponentFixture<TeamsAnnouncementCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamsAnnouncementCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamsAnnouncementCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
