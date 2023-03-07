import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffenderLinkCreateComponent } from './offender-link-create.component';

describe('OffenderLinkCreateComponent', () => {
  let component: OffenderLinkCreateComponent;
  let fixture: ComponentFixture<OffenderLinkCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffenderLinkCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffenderLinkCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
