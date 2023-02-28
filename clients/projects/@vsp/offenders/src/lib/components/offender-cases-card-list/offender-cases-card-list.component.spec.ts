import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffenderCasesCardListComponent } from './offender-cases-card-list.component';

describe('OffenderCasesCardListComponent', () => {
  let component: OffenderCasesCardListComponent;
  let fixture: ComponentFixture<OffenderCasesCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffenderCasesCardListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffenderCasesCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
