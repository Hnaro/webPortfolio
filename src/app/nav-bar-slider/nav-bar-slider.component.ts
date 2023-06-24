import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-bar-slider',
  templateUrl: './nav-bar-slider.component.html',
  styleUrls: ['./nav-bar-slider.component.css']
})
export class NavBarSliderComponent {
  @Input() msgFromParent:string = "";
  @Input() visibility:boolean | undefined;

  isHomePageBtnStyleActive: boolean = true;
  isProjectpageBtnStyleActive: boolean = false;
  isEduAndExpActive: boolean = false;
  @Input() isAboutActive: boolean = false;

  @Output() updateDataToParent = new EventEmitter();
  @Output() updateHomeVisibility = new EventEmitter();

  onClickHomePage() {
    this.updateDataToParent.emit(true);
    this.updateHomeVisibility.emit({ showHome: false, showSkills: true, showEduAndExp: true, showAbout: true});
    this.isHomePageBtnStyleActive = true;
    this.isProjectpageBtnStyleActive = false;
  }

  onClickProjects() {
    this.updateHomeVisibility.emit({ showHome: true, showSkills: false, showEduAndExp: true, showAbout: true});
    this.updateDataToParent.emit(true);
    this.isHomePageBtnStyleActive = false;
    this.isProjectpageBtnStyleActive = true;
  }

  close() {
    this.updateDataToParent.emit(true);
  }

  ngOnInit(): void {
    this.visibility = true;
    console.log("constructor in navslider: "+this.msgFromParent);
  }
}
