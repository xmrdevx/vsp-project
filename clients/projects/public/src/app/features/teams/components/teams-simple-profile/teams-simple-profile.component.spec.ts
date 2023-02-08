import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsSimpleProfileComponent } from './teams-simple-profile.component';

describe('TeamsSimpleProfileComponent', () => {
  let component: TeamsSimpleProfileComponent;
  let fixture: ComponentFixture<TeamsSimpleProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamsSimpleProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamsSimpleProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
