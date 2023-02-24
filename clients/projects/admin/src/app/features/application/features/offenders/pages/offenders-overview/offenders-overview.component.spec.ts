import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffendersOverviewComponent } from './offenders-overview.component';

describe('OffendersOverviewComponent', () => {
  let component: OffendersOverviewComponent;
  let fixture: ComponentFixture<OffendersOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffendersOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffendersOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
