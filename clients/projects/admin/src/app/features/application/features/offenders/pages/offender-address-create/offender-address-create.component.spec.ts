import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffenderAddressCreateComponent } from './offender-address-create.component';

describe('OffenderAddressCreateComponent', () => {
  let component: OffenderAddressCreateComponent;
  let fixture: ComponentFixture<OffenderAddressCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffenderAddressCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffenderAddressCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
