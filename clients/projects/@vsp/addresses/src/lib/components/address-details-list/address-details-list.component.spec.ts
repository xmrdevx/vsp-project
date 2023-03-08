import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressDetailsListComponent } from './address-details-list.component';

describe('AddressDetailsListComponent', () => {
  let component: AddressDetailsListComponent;
  let fixture: ComponentFixture<AddressDetailsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddressDetailsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddressDetailsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
