import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosSearchFilterComponent } from './videos-search-filter.component';

describe('VideosSearchFilterComponent', () => {
  let component: VideosSearchFilterComponent;
  let fixture: ComponentFixture<VideosSearchFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideosSearchFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideosSearchFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
