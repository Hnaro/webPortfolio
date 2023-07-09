import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-box',
  templateUrl: './project-box.component.html',
  styleUrls: ['./project-box.component.css']
})
export class ProjectBoxComponent{
  @Input() url: string = "https://www.youtube.com/";
  @Input() description: string = "";
  @Input() projectTitle: string = "";
}
