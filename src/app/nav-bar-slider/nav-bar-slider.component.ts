import { Component, Input, Output, SimpleChanges, OnInit, OnChanges, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-bar-slider',
  templateUrl: './nav-bar-slider.component.html',
  styleUrls: ['./nav-bar-slider.component.css']
})
export class NavBarSliderComponent implements OnInit, OnChanges  {
  @Input() msgFromParent:string = ""; 
  @Input() visibility:boolean | undefined;

  @Output() updateDataToParent = new EventEmitter();

  ngOnChanges(changes: SimpleChanges): void {
    //console.log("current value: "+changes["msgFromParent"].currentValue);

    //if (changes["msgFromParent"].currentValue == "open") {
      //console.log("it is open");
      //this.visibility = false;
    //}
    if (changes["visibility"].currentValue) {
      this.visibility = changes["visibility"].currentValue;
      console.log("new value: "+this.visibility);
    } else {
      console.log("undefined");
    }
  }

  close() {
    this.visibility = true;
    this.msgFromParent = "";
    // after clicking this close should update back the data to the main page
    this.updateDataToParent.emit(true);
  }
  
  constructor() {
  }

  ngOnInit(): void {
    this.visibility = true;
    console.log("constructor in navslider: "+this.msgFromParent);
  }
}
