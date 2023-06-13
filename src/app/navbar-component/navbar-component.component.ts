import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-component',
  templateUrl: './navbar-component.component.html',
  styleUrls: ['./navbar-component.component.css']
})
export class NavbarComponentComponent implements OnInit {
  @Input() isHomeActive: boolean | undefined;
  @Input() isEduAndexpActive: boolean | undefined;
  @Input() isAboutpgActive: boolean | undefined;
  @Input() isSkillsActive: boolean | undefined;
  @Output() isVisible = new EventEmitter();

  homeIsActive: boolean | undefined;
  skillsIsActive: boolean | undefined;
  eduAndExpIsActive: boolean | undefined;
  aboutIsActive: boolean | undefined;

  ngOnInit(): void {
    this.isHomeActive = false;
    this.homeIsActive = !this.isHomeActive
  }

  sidebar(): void {
        // send false to child to open the sidebar
        console.log("Parent message to child: false is sent");
        this.isVisible.emit(false);
        //this.messageFromParent = "open";
  }

  checkVisibility(home:boolean,skills:boolean,eduAndExpIsActive:boolean,aboutIsActive:boolean) {
    this.homeIsActive=home;
    this.skillsIsActive=skills;
    this.eduAndExpIsActive=eduAndExpIsActive;
    this.aboutIsActive=aboutIsActive;
  }

  homePgBtn() {
    this.isVisible.emit({ showHome: false, showSkills: true, showEduAndExp: true, showAbout: true});
    this.checkVisibility(true, false, false ,false);
  }
  skillsPgBtn() {
    this.isVisible.emit({ showHome: true, showSkills: false, showEduAndExp: true, showAbout: true});
    this.checkVisibility(false, true, false, false);
  }
  eduAndExpPgBtn() {
    this.isVisible.emit({ showHome: true, showSkills: true, showEduAndExp: false, showAbout: true});
    this.checkVisibility(false, false, true, false);
  }
  aboutPgBtn() {
    this.isVisible.emit({ showHome: true, showSkills: true, showEduAndExp: true, showAbout: false});
    this.checkVisibility(false, false , false, true);
  }
}
