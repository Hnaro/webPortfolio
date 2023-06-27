import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsComponentComponent } from './skills-component.component';

describe('SkillsComponentComponent', () => {
  let component: SkillsComponentComponent;
  let fixture: ComponentFixture<SkillsComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkillsComponentComponent]
    });
    fixture = TestBed.createComponent(SkillsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
