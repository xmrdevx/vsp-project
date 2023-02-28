import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffenderCasesDetailsComponent } from './offender-cases-details.component';

describe('OffenderCasesDetailsComponent', () => {
  let component: OffenderCasesDetailsComponent;
  let fixture: ComponentFixture<OffenderCasesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffenderCasesDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffenderCasesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
