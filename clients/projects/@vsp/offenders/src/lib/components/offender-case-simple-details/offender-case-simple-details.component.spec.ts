import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffenderCaseSimpleDetailsComponent } from './offender-case-simple-details.component';

describe('OffenderCaseSimpleDetailsComponent', () => {
  let component: OffenderCaseSimpleDetailsComponent;
  let fixture: ComponentFixture<OffenderCaseSimpleDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffenderCaseSimpleDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffenderCaseSimpleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
