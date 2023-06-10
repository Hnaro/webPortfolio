import { Component } from '@angular/core';

@Component({
  selector: 'app-skills-component',
  templateUrl: './skills-component.component.html',
  styleUrls: ['./skills-component.component.css']
})
export class SkillsComponentComponent {
  skillLists = [["ExpressJs", "NodeJs"], ["Angular", "Javascript"],
                ["MongoDB", "AWS"], ["Photoshop", "HTML"], ["CSS", "C#"], 
                ["JQuery", "GitHub"], ["Typescript", "Java"]];
}
