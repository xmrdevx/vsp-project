import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestMissingChildrenGridComponent } from './latest-missing-children-grid.component';

describe('LatestMissingChildrenGridComponent', () => {
  let component: LatestMissingChildrenGridComponent;
  let fixture: ComponentFixture<LatestMissingChildrenGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestMissingChildrenGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestMissingChildrenGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
