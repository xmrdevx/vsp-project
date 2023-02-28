import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffenderCasesCardListSkeletonComponent } from './offender-cases-card-list-skeleton.component';

describe('OffenderCasesCardListSkeletonComponent', () => {
  let component: OffenderCasesCardListSkeletonComponent;
  let fixture: ComponentFixture<OffenderCasesCardListSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffenderCasesCardListSkeletonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffenderCasesCardListSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
