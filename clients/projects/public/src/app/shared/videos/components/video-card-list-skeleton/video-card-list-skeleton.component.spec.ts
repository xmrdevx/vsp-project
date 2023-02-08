import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoCardListSkeletonComponent } from './video-card-list-skeleton.component';

describe('VideoCardListSkeletonComponent', () => {
  let component: VideoCardListSkeletonComponent;
  let fixture: ComponentFixture<VideoCardListSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoCardListSkeletonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoCardListSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
