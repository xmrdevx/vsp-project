import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoListSkeletonComponent } from './video-list-skeleton.component';

describe('VideoListSkeletonComponent', () => {
  let component: VideoListSkeletonComponent;
  let fixture: ComponentFixture<VideoListSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoListSkeletonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoListSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
