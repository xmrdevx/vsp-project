import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffenderAddressFormComponent } from './offender-address-form.component';

describe('OffenderAddressFormComponent', () => {
  let component: OffenderAddressFormComponent;
  let fixture: ComponentFixture<OffenderAddressFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffenderAddressFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffenderAddressFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
