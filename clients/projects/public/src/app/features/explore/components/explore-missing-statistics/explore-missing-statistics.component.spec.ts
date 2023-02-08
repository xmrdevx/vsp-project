import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreMissingStatisticsComponent } from './explore-missing-statistics.component';

describe('ExploreMissingStatisticsComponent', () => {
  let component: ExploreMissingStatisticsComponent;
  let fixture: ComponentFixture<ExploreMissingStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExploreMissingStatisticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreMissingStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
