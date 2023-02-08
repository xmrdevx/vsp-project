import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoCardPlayerComponent } from './video-card-player.component';

describe('VideoCardPlayerComponent', () => {
  let component: VideoCardPlayerComponent;
  let fixture: ComponentFixture<VideoCardPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoCardPlayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoCardPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
