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

  activeHome: boolean | undefined;

  ngOnInit(): void {
    this.isHomeActive = false;
    this.activeHome = !this.isHomeActive
  }

  sidebar(): void {
        // send false to child to open the sidebar
        console.log("Parent message to child: false is sent");
        this.isVisible.emit(false);
        //this.messageFromParent = "open";
  }
}
