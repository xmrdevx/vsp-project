import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffenderFormComponent } from './offender-form.component';

describe('OffenderFormComponent', () => {
  let component: OffenderFormComponent;
  let fixture: ComponentFixture<OffenderFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffenderFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffenderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
