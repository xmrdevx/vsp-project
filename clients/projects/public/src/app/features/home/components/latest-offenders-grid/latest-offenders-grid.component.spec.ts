import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestOffendersGridComponent } from './latest-offenders-grid.component';

describe('LatestOffendersGridComponent', () => {
  let component: LatestOffendersGridComponent;
  let fixture: ComponentFixture<LatestOffendersGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestOffendersGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestOffendersGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
