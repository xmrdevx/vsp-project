import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffenderSimpleProfileComponent } from './offender-simple-profile.component';

describe('OffenderSimpleProfileComponent', () => {
  let component: OffenderSimpleProfileComponent;
  let fixture: ComponentFixture<OffenderSimpleProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffenderSimpleProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffenderSimpleProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
