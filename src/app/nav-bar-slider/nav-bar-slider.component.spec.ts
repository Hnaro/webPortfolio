import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarSliderComponent } from './nav-bar-slider.component';

describe('NavBarSliderComponent', () => {
  let component: NavBarSliderComponent;
  let fixture: ComponentFixture<NavBarSliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavBarSliderComponent]
    });
    fixture = TestBed.createComponent(NavBarSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
