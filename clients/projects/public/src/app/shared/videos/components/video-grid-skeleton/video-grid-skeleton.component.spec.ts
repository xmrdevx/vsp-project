import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoGridSkeletonComponent } from './video-grid-skeleton.component';

describe('VideoGridSkeletonComponent', () => {
  let component: VideoGridSkeletonComponent;
  let fixture: ComponentFixture<VideoGridSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoGridSkeletonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoGridSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
