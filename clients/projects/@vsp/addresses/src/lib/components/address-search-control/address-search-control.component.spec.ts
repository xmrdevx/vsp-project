import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressSearchControlComponent } from './address-search-control.component';

describe('AddressSearchControlComponent', () => {
  let component: AddressSearchControlComponent;
  let fixture: ComponentFixture<AddressSearchControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddressSearchControlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddressSearchControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
