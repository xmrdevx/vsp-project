import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasesCardListComponent } from './cases-card-list.component';

describe('CasesCardListComponent', () => {
  let component: CasesCardListComponent;
  let fixture: ComponentFixture<CasesCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasesCardListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CasesCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
