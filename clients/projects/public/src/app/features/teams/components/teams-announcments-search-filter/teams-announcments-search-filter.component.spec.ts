import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsAnnouncmentsSearchFilterComponent } from './teams-announcments-search-filter.component';

describe('TeamsAnnouncmentsSearchFilterComponent', () => {
  let component: TeamsAnnouncmentsSearchFilterComponent;
  let fixture: ComponentFixture<TeamsAnnouncmentsSearchFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamsAnnouncmentsSearchFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamsAnnouncmentsSearchFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
