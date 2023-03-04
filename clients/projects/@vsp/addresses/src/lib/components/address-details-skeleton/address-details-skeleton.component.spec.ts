import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressDetailsSkeletonComponent } from './address-details-skeleton.component';

describe('AddressDetailsSkeletonComponent', () => {
  let component: AddressDetailsSkeletonComponent;
  let fixture: ComponentFixture<AddressDetailsSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddressDetailsSkeletonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddressDetailsSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
