import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissionTemplateFormComponent } from './permission-template-form.component';

describe('PermissionTemplateFormComponent', () => {
  let component: PermissionTemplateFormComponent;
  let fixture: ComponentFixture<PermissionTemplateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PermissionTemplateFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PermissionTemplateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
