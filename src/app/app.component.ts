import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'webportfolio';
  isVisible:any = null;

  sideBar() {
    console.log("test")
    this.isVisible = false;
  }
}
