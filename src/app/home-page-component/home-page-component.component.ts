import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home-page-component',
  templateUrl: './home-page-component.component.html',
  styleUrls: ['./home-page-component.component.css']
})
export class HomePageComponentComponent {
  @Output() updateVisibility = new EventEmitter();

  message: string = "from homepage component";

  aboutmeBtn(): void {
    this.updateVisibility.emit({ showHome: true, showSkills: true, showEduAndExp: true, showAbout: false});
  }
}
