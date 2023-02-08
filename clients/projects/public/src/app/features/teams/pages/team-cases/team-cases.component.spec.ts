import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamCasesComponent } from './team-cases.component';

describe('TeamCasesComponent', () => {
  let component: TeamCasesComponent;
  let fixture: ComponentFixture<TeamCasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamCasesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
