import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill-box-component',
  templateUrl: './skill-box-component.component.html',
  styleUrls: ['./skill-box-component.component.css']
})
export class SkillBoxComponentComponent {
  @Input() imageSrc: any;
  @Input() skillName: string = "";
}
