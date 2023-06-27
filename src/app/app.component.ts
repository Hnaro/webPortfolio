import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: []
})
export class AppComponent {
  isVisible:boolean | undefined;
  messageFromParent:string="";

  constructor() {}

  recieveUpdatedData(e:any) {
    this.isVisible = e;
  }

  handlevisibility(e:any) {
    this.isVisible = e;
  }
  sideBar() {
    // send false to child to open the sidebar
    this.isVisible = false;
    //this.messageFromParent = "open";
  }
}
