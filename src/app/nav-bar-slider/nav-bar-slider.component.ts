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
  @Output() updateHomeVisibility = new EventEmitter();

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

  showHomePage() {
    this.updateDataToParent.emit(true);
    this.updateHomeVisibility.emit({ showHome: false, showSkills: true, showEduAndExp: true, showAbout: true});
  }

  showSkillsPage() {
    this.updateHomeVisibility.emit({ showHome: true, showSkills: false, showEduAndExp: true, showAbout: true});
    this.updateDataToParent.emit(true);
  }

  showEduAndExpPage() {
    this.updateDataToParent.emit(true);
    this.updateHomeVisibility.emit({ showHome: true, showSkills: true, showEduAndExp: false, showAbout: true});
  }

  showAboutPage() {
    this.updateDataToParent.emit(true);
    this.updateHomeVisibility.emit({ showHome: true, showSkills: true, showEduAndExp: true, showAbout: false});
  }

  ngOnInit(): void {
    this.visibility = true;
    console.log("constructor in navslider: "+this.msgFromParent);
  }
}
