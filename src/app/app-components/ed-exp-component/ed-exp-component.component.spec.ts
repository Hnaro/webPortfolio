import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdExpComponentComponent } from './ed-exp-component.component';

describe('EdExpComponentComponent', () => {
  let component: EdExpComponentComponent;
  let fixture: ComponentFixture<EdExpComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EdExpComponentComponent]
    });
    fixture = TestBed.createComponent(EdExpComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
