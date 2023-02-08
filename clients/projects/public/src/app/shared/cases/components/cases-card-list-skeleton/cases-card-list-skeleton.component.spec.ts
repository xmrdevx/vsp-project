import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasesCardListSkeletonComponent } from './cases-card-list-skeleton.component';

describe('CasesCardListSkeletonComponent', () => {
  let component: CasesCardListSkeletonComponent;
  let fixture: ComponentFixture<CasesCardListSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasesCardListSkeletonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CasesCardListSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
