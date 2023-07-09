import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { ActiveLinkService } from 'src/app/app-services/active-link.service';

@Component({
  selector: 'app-navbar-component',
  templateUrl: './navbar-component.component.html',
  styleUrls: ['./navbar-component.component.css'],
  providers: [ActiveLinkService]
})
export class NavbarComponentComponent implements OnInit {
  @Input() isHomeActive: boolean | undefined;
  @Input() isSkillsActive: boolean | undefined;

  @Output() isVisible = new EventEmitter();
  @Output() updateVisibility = new EventEmitter();

  homeIsActive: boolean = false;
  projectIsActive: boolean = false;
  ismouseOverActive: boolean = false;

  ismouseOverSkills: boolean | undefined;

  constructor(private activelink: ActiveLinkService) {
    console.log(this.activelink.getHomeState())
  }
  ngOnInit(): void {
  }

  sidebar(): void {
        // send false to child to open the sidebar
        console.log("Parent message to child: false is sent");
        this.isVisible.emit(false);
        //this.messageFromParent = "open";
  }

  homePgBtn() {
    this.updateVisibility.emit({ showHome: false, showSkills: true, showEduAndExp: true, showAbout: true});
  }
  skillsPgBtn() {
    this.updateVisibility.emit({ showHome: true, showSkills: false, showEduAndExp: true, showAbout: true});
  }
  eduAndExpPgBtn() {
    this.updateVisibility.emit({ showHome: true, showSkills: true, showEduAndExp: false, showAbout: true});
  }
}
