import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectPageCompComponent } from './project-page-comp.component';

describe('ProjectPageCompComponent', () => {
  let component: ProjectPageCompComponent;
  let fixture: ComponentFixture<ProjectPageCompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectPageCompComponent]
    });
    fixture = TestBed.createComponent(ProjectPageCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
