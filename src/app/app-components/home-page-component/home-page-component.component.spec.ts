import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageComponentComponent } from './home-page-component.component';

describe('HomePageComponentComponent', () => {
  let component: HomePageComponentComponent;
  let fixture: ComponentFixture<HomePageComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomePageComponentComponent]
    });
    fixture = TestBed.createComponent(HomePageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
