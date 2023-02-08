import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseSimpleProfileComponent } from './case-simple-profile.component';

describe('CaseSimpleProfileComponent', () => {
  let component: CaseSimpleProfileComponent;
  let fixture: ComponentFixture<CaseSimpleProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaseSimpleProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseSimpleProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
