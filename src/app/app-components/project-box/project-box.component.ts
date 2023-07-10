import { Component, Input } from '@angular/core';
import { easeUp } from 'src/app/app-animations/animations';

@Component({
  selector: 'app-project-box',
  templateUrl: './project-box.component.html',
  styleUrls: ['./project-box.component.css'],
  animations: [easeUp]
})
export class ProjectBoxComponent{
  @Input() url: string = "https://www.youtube.com/";
  @Input() description: string = "";
  @Input() projectTitle: string = "";
  @Input() imageUrl: string = "";
  @Input() gitHubUrl: string = "";
  isHover: boolean = true;
  isState: boolean = true;
  btnName: string = "See more"
  onclick() {
    if (!this.isHover) {
      this.isState = true;
      setTimeout(() => {
        this.isHover = true;
        this.btnName = "See more"
      }, 800)
       return;
    }
    this.isHover = false;
    this.isState = false;
    this.btnName = "close"
  }
}
