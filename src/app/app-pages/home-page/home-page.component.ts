import { Component } from '@angular/core';
import { easeIn } from 'src/app/app-animations/animations';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  animations: [easeIn]
})
export class HomePageComponent {

  isSkillsSectionActive: boolean = true;
  isEduSectionActive: boolean = true;
  isMainSectionActive: boolean = true;

  activateStyleAbout: boolean = false;

  isMainActive: boolean = true;
  isSkillsActive: boolean = false;
  isEduActive: boolean = false;

  isMainAimationTrigger: boolean = false;
  isSkillsAnimationTrigger: boolean = false;
  isEduAnimationTrigger: boolean = false;

  ngOnInit(): void {
    this.isMainSectionActive = false;
    this.isMainAimationTrigger = true;
  }
  aboutBtn(e: any) {
    this.activateStyleAbout = e;
  }
  onClick(isActive: string) {
    this.checkActiveBtn(isActive);
    switch(isActive) {
      case 'main':
        this.isMainActive = true;
        this.isMainAimationTrigger = true;
        this.isSkillsAnimationTrigger = false;
        this.isEduAnimationTrigger = false;
        this.isMainSectionActive = !this.isMainActive;
        break;
      case 'skills':
        this.isSkillsActive = true;
        this.isMainAimationTrigger = false;
        this.isSkillsAnimationTrigger = true;
        this.isEduAnimationTrigger = false;
        this.isSkillsSectionActive = !this.isSkillsActive
        break;
      case 'edu':
        this.isEduActive = true;
        this.isMainAimationTrigger = false;
        this.isSkillsAnimationTrigger = false;
        this.isEduAnimationTrigger = true;
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
}
