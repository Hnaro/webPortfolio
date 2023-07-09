import { Component, OnInit } from '@angular/core';
import { ActiveLinkService } from './app-services/active-link.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: []
})
export class AppComponent implements OnInit {
  isVisible:boolean | undefined;
  messageFromParent:string="";

  projectState: boolean = false;

  constructor(private route:ActivatedRoute) {
    console.log("launched")
  }
  ngOnInit(): void {

  }
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
