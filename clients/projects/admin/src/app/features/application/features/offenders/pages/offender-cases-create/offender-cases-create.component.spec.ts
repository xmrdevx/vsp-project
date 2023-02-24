import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffenderCasesCreateComponent } from './offender-cases-create.component';

describe('OffenderCasesCreateComponent', () => {
  let component: OffenderCasesCreateComponent;
  let fixture: ComponentFixture<OffenderCasesCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffenderCasesCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffenderCasesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
