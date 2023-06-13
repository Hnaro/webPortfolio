import { Component } from '@angular/core';

@Component({
  selector: 'app-skills-component',
  templateUrl: './skills-component.component.html',
  styleUrls: ['./skills-component.component.css']
})
export class SkillsComponentComponent {
  skillLists = [[{ name: "Express", path: "../../assets/img/expressJS.png"}, {name: "Node", path: "../../assets/img/nodejs.png" }], [{name:"Angular", path:"../../assets/img/angular.png"}, {name:"Javascript", path:"../../assets/img/javascript.png"}], [{name: "MongoDB", path:"../../assets/img/mongodb.png"}, {name:"Amazon",path:"../../assets/img/aws.png"}], [{name:"Photoshop",path:"../../assets/img/phosothop.png"}, {name:"HTML",path:"../../assets/img/html.png"}],
                [{name:"CSS", path:"../../assets/img/css.png"}, {name:"C#", path:"../../assets/img/cSharp.png"}],[{name:"JQuery", path:"../../assets/img/jquery.png"},{name:"GitHub", path:"../../assets/img/github.png"}],[{name:"Typescript", path:"../../assets/img/typescript.png"}, {name:"Java",path:"../../assets/img/java.png"}],[{name:"Git",path:"../../assets/img/git.png"},{name:"New Skills?",path:"../../assets/img/vacant.png"}]];

  skillListDesktop =
  [
    { name: "Express", path: "../../assets/img/expressJS.png"},
    {name: "Node", path: "../../assets/img/nodejs.png" },
    {name:"Angular", path:"../../assets/img/angular.png"},
    {name:"Javascript", path:"../../assets/img/javascript.png"},
    {name: "MongoDB", path:"../../assets/img/mongodb.png"},
    {name:"Amazon",path:"../../assets/img/aws.png"},
    {name:"Photoshop",path:"../../assets/img/phosothop.png"},
    {name:"HTML",path:"../../assets/img/html.png"},
    {name:"CSS", path:"../../assets/img/css.png"},
    {name:"C#", path:"../../assets/img/cSharp.png"},
    {name:"JQuery", path:"../../assets/img/jquery.png"},
    {name:"GitHub", path:"../../assets/img/github.png"},
    {name:"Typescript", path:"../../assets/img/typescript.png"},
    {name:"Java",path:"../../assets/img/java.png"},
    {name:"Git",path:"../../assets/img/git.png"},
    {name:"New Skills?",path:"../../assets/img/vacant.png"}
  ];
}
