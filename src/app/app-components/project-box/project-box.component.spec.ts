import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectBoxComponent } from './project-box.component';

describe('ProjectBoxComponent', () => {
  let component: ProjectBoxComponent;
  let fixture: ComponentFixture<ProjectBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectBoxComponent]
    });
    fixture = TestBed.createComponent(ProjectBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
