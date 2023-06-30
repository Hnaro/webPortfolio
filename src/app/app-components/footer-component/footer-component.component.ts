import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { easeUp } from 'src/app/app-animations/animations';

@Component({
  selector: 'app-footer-component',
  templateUrl: './footer-component.component.html',
  styleUrls: ['./footer-component.component.css'],
  animations: [easeUp]
})
export class FooterComponentComponent {
  @ViewChild('divFooter') divfooter!: ElementRef;
  triggerEaseUpAnimation: boolean = false;
  constructor() {
    console.log(this.divfooter)
  }

  @HostListener('document:scroll')
  public onViewportScroll() {
    const windowHeight = window.innerHeight;
    //console.log(this.divfooter.nativeElement.getBoundingClientRect());
    if (this.divfooter.nativeElement.getBoundingClientRect().top <= 700){
      this.triggerEaseUpAnimation = true;
    }
  }
}
