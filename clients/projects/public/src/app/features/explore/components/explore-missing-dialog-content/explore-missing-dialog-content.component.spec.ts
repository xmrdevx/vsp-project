import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreMissingDialogContentComponent } from './explore-missing-dialog-content.component';

describe('ExploreMissingDialogContentComponent', () => {
  let component: ExploreMissingDialogContentComponent;
  let fixture: ComponentFixture<ExploreMissingDialogContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExploreMissingDialogContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreMissingDialogContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
