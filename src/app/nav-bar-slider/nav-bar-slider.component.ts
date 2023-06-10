import { Component, Input, Output, SimpleChanges, OnInit, OnChanges, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-bar-slider',
  templateUrl: './nav-bar-slider.component.html',
  styleUrls: ['./nav-bar-slider.component.css']
})
export class NavBarSliderComponent implements OnInit, OnChanges  {
  @Input() msgFromParent:string = ""; 
  @Input() visibility:boolean | undefined;

  isHomeActive: boolean = true;
  isSkillsActive: boolean = false;
  isEduAndExpActive: boolean = false;
  isAboutActive: boolean = false;

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
    this.isHomeActive = true;
    this.isSkillsActive = false;
    this.isEduAndExpActive = false
    this.isAboutActive = false;
  }

  showSkillsPage() {
    this.updateHomeVisibility.emit({ showHome: true, showSkills: false, showEduAndExp: true, showAbout: true});
    this.updateDataToParent.emit(true);
    this.isHomeActive = false;
    this.isSkillsActive = true;
    this.isEduAndExpActive = false;
    this.isAboutActive = false;
  }

  showEduAndExpPage() {
    this.updateDataToParent.emit(true);
    this.updateHomeVisibility.emit({ showHome: true, showSkills: true, showEduAndExp: false, showAbout: true});
    this.isHomeActive = false;
    this.isSkillsActive = false;
    this.isEduAndExpActive = true;
    this.isAboutActive = false;
  }

  showAboutPage() {
    this.updateDataToParent.emit(true);
    this.updateHomeVisibility.emit({ showHome: true, showSkills: true, showEduAndExp: true, showAbout: false});
    this.isHomeActive = false;
    this.isSkillsActive = false;
    this.isEduAndExpActive = false;
    this.isAboutActive = true;
  }

  ngOnInit(): void {
    this.visibility = true;
    console.log("constructor in navslider: "+this.msgFromParent);
  }
}
