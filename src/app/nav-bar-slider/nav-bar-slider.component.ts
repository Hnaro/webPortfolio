import { Component, Input, Output, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-nav-bar-slider',
  templateUrl: './nav-bar-slider.component.html',
  styleUrls: ['./nav-bar-slider.component.css']
})
export class NavBarSliderComponent implements OnChanges  {
  visibility:boolean = true;

  ngOnChanges(changes: SimpleChanges): void {
    console.log("first changes: "+changes["visibility"].firstChange);
    console.log("current value: "+changes["visibility"].currentValue);
    console.log("prev value: "+changes["visibility"].previousValue);
  }
}
