import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandableParagraphComponent } from './expandable-paragraph.component';

describe('ExpandableParagraphComponent', () => {
  let component: ExpandableParagraphComponent;
  let fixture: ComponentFixture<ExpandableParagraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpandableParagraphComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpandableParagraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
