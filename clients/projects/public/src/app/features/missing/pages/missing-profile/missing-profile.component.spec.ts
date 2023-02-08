import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissingProfileComponent } from './missing-profile.component';

describe('MissingProfileComponent', () => {
  let component: MissingProfileComponent;
  let fixture: ComponentFixture<MissingProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissingProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MissingProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
