import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissingPersonSimpleProfileComponent } from './missing-person-simple-profile.component';

describe('MissingPersonSimpleProfileComponent', () => {
  let component: MissingPersonSimpleProfileComponent;
  let fixture: ComponentFixture<MissingPersonSimpleProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissingPersonSimpleProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MissingPersonSimpleProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
