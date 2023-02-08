import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamAccouncementsComponent } from './team-accouncements.component';

describe('TeamAccouncementsComponent', () => {
  let component: TeamAccouncementsComponent;
  let fixture: ComponentFixture<TeamAccouncementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamAccouncementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamAccouncementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
