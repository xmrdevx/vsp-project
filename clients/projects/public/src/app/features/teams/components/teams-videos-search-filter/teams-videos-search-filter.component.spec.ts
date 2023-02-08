import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsVideosSearchFilterComponent } from './teams-videos-search-filter.component';

describe('TeamsVideosSearchFilterComponent', () => {
  let component: TeamsVideosSearchFilterComponent;
  let fixture: ComponentFixture<TeamsVideosSearchFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamsVideosSearchFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamsVideosSearchFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
