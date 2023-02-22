import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimPermissionsControlComponent } from './claim-permissions-control.component';

describe('ClaimPermissionsControlComponent', () => {
  let component: ClaimPermissionsControlComponent;
  let fixture: ComponentFixture<ClaimPermissionsControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClaimPermissionsControlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClaimPermissionsControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
