import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffenderCasesUpdateComponent } from './offender-cases-update.component';

describe('OffenderCasesUpdateComponent', () => {
  let component: OffenderCasesUpdateComponent;
  let fixture: ComponentFixture<OffenderCasesUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffenderCasesUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffenderCasesUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
