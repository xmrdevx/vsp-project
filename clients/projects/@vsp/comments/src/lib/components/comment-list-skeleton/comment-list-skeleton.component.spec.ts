import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentListSkeletonComponent } from './comment-list-skeleton.component';

describe('CommentListSkeletonComponent', () => {
  let component: CommentListSkeletonComponent;
  let fixture: ComponentFixture<CommentListSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentListSkeletonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentListSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
