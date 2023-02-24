import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffendersCreateComponent } from './offenders-create.component';

describe('OffendersCreateComponent', () => {
  let component: OffendersCreateComponent;
  let fixture: ComponentFixture<OffendersCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffendersCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffendersCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
