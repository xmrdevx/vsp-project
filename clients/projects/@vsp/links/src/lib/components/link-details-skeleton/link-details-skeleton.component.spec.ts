import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkDetailsSkeletonComponent } from './link-details-skeleton.component';

describe('LinkDetailsSkeletonComponent', () => {
  let component: LinkDetailsSkeletonComponent;
  let fixture: ComponentFixture<LinkDetailsSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkDetailsSkeletonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkDetailsSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
