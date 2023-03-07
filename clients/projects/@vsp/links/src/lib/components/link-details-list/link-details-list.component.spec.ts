import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkDetailsListComponent } from './link-details-list.component';

describe('LinkDetailsListComponent', () => {
  let component: LinkDetailsListComponent;
  let fixture: ComponentFixture<LinkDetailsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkDetailsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkDetailsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
