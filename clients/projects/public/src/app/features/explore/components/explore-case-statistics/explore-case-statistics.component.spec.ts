import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreCaseStatisticsComponent } from './explore-case-statistics.component';

describe('ExploreCaseStatisticsComponent', () => {
  let component: ExploreCaseStatisticsComponent;
  let fixture: ComponentFixture<ExploreCaseStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExploreCaseStatisticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreCaseStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
