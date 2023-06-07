import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'webportfolio';
  isVisible:boolean | undefined;
  messageFromParent:string="";

  recieveUpdatedData(e:any) {
    this.isVisible = e;
    console.log("receieve from child");
  }

  sideBar() {
    // send false to child to open the sidebar
    this.isVisible = false;
    //this.messageFromParent = "open";
    console.log("Parent message to child: "+this.messageFromParent);
  }
}
