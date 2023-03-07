import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffenderLinkFormComponent } from './offender-link-form.component';

describe('OffenderLinkFormComponent', () => {
  let component: OffenderLinkFormComponent;
  let fixture: ComponentFixture<OffenderLinkFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffenderLinkFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffenderLinkFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
