import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPageComponentComponent } from './about-page-component.component';

describe('AboutPageComponentComponent', () => {
  let component: AboutPageComponentComponent;
  let fixture: ComponentFixture<AboutPageComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutPageComponentComponent]
    });
    fixture = TestBed.createComponent(AboutPageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
