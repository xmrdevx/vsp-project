import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoCardPlayerSkeletonComponent } from './video-card-player-skeleton.component';

describe('VideoCardPlayerSkeletonComponent', () => {
  let component: VideoCardPlayerSkeletonComponent;
  let fixture: ComponentFixture<VideoCardPlayerSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoCardPlayerSkeletonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoCardPlayerSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
