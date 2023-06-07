import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillBoxComponentComponent } from './skill-box-component.component';

describe('SkillBoxComponentComponent', () => {
  let component: SkillBoxComponentComponent;
  let fixture: ComponentFixture<SkillBoxComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkillBoxComponentComponent]
    });
    fixture = TestBed.createComponent(SkillBoxComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
