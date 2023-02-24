import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffenderCasesOverviewComponent } from './offender-cases-overview.component';

describe('OffenderCasesOverviewComponent', () => {
  let component: OffenderCasesOverviewComponent;
  let fixture: ComponentFixture<OffenderCasesOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffenderCasesOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffenderCasesOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
