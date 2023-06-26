import { Component, OnInit } from '@angular/core';
import { state, trigger, animate, transition, style } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: []
})
export class AppComponent implements OnInit {
  isVisible:boolean | undefined;
  messageFromParent:string="";

  isSkillsSectionActive: boolean = true;
  isEduSectionActive: boolean = true;
  isMainSectionActive: boolean = true;

  activateStyleAbout: boolean = false;

  isMainActive: boolean = true;
  isSkillsActive: boolean = false;
  isEduActive: boolean = false;

  isMainAimationTrigger: boolean = false;

  // use for animation to which state is active 
  // has Active, recentActive, nonRecentActive
  componentState: string;

  constructor() {
    this.componentState = 'currentActive'
  }

  ngOnInit(): void {
    this.isMainSectionActive = false;
    this.isMainAimationTrigger = true;
  }

  onClick(isActive: string) {
    this.checkActiveBtn(isActive);
    switch(isActive) {
      case 'main':
        this.isMainActive = true;
        this.isMainAimationTrigger = true;
        this.isMainSectionActive = !this.isMainActive;
        break;
      case 'skills':
        this.isSkillsActive = true;
        this.isMainAimationTrigger = false;
        this.isSkillsSectionActive = !this.isSkillsActive
        break;
      case 'edu':
        this.isEduActive = true;
        this.isMainAimationTrigger = false;
        this.isEduSectionActive = !this.isEduActive
        break;
    }
  }

  private checkActiveBtn(isActive: string) {
    if (isActive.localeCompare('main') == 0) {
      // turn off active state for other button
      this.isEduActive = false;
      this.isSkillsActive = false;
      // hide
      this.isEduSectionActive = !this.isEduActive;
      this.isSkillsSectionActive = !this.isSkillsActive;
    } else if (isActive.localeCompare('skills') == 0) {
      this.isMainActive = false;
      this.isEduActive = false;
      //hide
      this.isMainSectionActive = !this.isMainActive;
      this.isEduSectionActive = !this.isEduActive;
    } else {
      this.isMainActive = false;
      this.isSkillsActive = false;
      //hide
      this.isMainSectionActive = !this.isMainActive;
      this.isSkillsSectionActive = !this.isSkillsActive;
    }
  }

  aboutBtn(e: any) {
    this.activateStyleAbout = e;
  }

  recieveUpdatedData(e:any) {
    this.isVisible = e;
  }

  handlevisibility(e:any) {
    this.isVisible = e;
  }

  sideBar() {
    // send false to child to open the sidebar
    this.isVisible = false;
    //this.messageFromParent = "open";
  }
}
