import { Component, Output, EventEmitter } from '@angular/core';
import { trigger, animate, transition, style } from '@angular/animations'

@Component({
  selector: 'app-home-page-component',
  templateUrl: './home-page-component.component.html',
  styleUrls: ['./home-page-component.component.css'],
  animations: [
    trigger('fadeInSlideDown', [
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateY(-10%)'
        }),
        animate('0.3s')
      ])
    ]),
    trigger('slideInRightToLeft', [
      transition('void => *', [
        style({
          transform: 'translateX(20%)'
        }),
        animate('0.3s')
      ])
    ]),
    trigger('slideInLeftToRight', [
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-20%)'
        }), 
        animate('0.3s')
      ])
    ])
  ]
})
export class HomePageComponentComponent {
  @Output() updateVisibility = new EventEmitter();

  message: string = "from homepage component";

  aboutmeBtn(): void {
    this.updateVisibility.emit({ showHome: true, showSkills: true, showEduAndExp: true, showAbout: false});
  }
}
