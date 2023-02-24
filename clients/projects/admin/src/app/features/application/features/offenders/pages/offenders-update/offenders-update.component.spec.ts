import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffendersUpdateComponent } from './offenders-update.component';

describe('OffendersUpdateComponent', () => {
  let component: OffendersUpdateComponent;
  let fixture: ComponentFixture<OffendersUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffendersUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffendersUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
