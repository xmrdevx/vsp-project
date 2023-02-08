import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoCardTileSkeletonComponent } from './video-card-tile-skeleton.component';

describe('VideoCardTileSkeletonComponent', () => {
  let component: VideoCardTileSkeletonComponent;
  let fixture: ComponentFixture<VideoCardTileSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoCardTileSkeletonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoCardTileSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
