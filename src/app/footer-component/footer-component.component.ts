import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-footer-component',
  templateUrl: './footer-component.component.html',
  styleUrls: ['./footer-component.component.css']
})
export class FooterComponentComponent implements OnChanges {
  @Input() isSkillsPageActive: boolean | undefined;
  @Input() isEduAndExpPageActive: boolean | undefined;
  @Input() isAboutPageActive: boolean | undefined;

  skillsPageBgColorActive: boolean | undefined;
  aboutPageBgColorActive: boolean | undefined;
  eduAndExpBgColorisActive: boolean | undefined

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.isSkillsPageActive) {
      this.skillsPageBgColorActive = true;
      this.aboutPageBgColorActive = false;
      this.eduAndExpBgColorisActive = false;
    } else if (!this.isAboutPageActive) {
      this.aboutPageBgColorActive = true;
      this.skillsPageBgColorActive = false;
      this.eduAndExpBgColorisActive = false;
    } else {
      this.eduAndExpBgColorisActive = true
      this.aboutPageBgColorActive = false;
      this.skillsPageBgColorActive = false;
    }
  }
}
