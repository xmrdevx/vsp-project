import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsCasesSearchFilterComponent } from './teams-cases-search-filter.component';

describe('TeamsCasesSearchFilterComponent', () => {
  let component: TeamsCasesSearchFilterComponent;
  let fixture: ComponentFixture<TeamsCasesSearchFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamsCasesSearchFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamsCasesSearchFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
