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

  homepgVisibility: boolean = false;
  skillspgVisibility: boolean = true;
  educationAndExpPageVisibility: boolean = true;
  aboutPageVisibility: boolean = true;

  isHomeActive: boolean = true;

  showHome(e:any) {
    // opens make the visibility for home to false
    console.log("test show home");
    //this.homepgVisibility = e;

    if (!e.showHome) {
      this.isHomeActive = true;
    }else {
      this.isHomeActive = false;
    }

    if (!e.showHome) {
      this.homepgVisibility = e.showHome;
      this.aboutPageVisibility = true;
      this.skillspgVisibility = true;
      this.educationAndExpPageVisibility = true;
    }  
    
    if (!e.showEduAndExp) {
      this.homepgVisibility = true;
      this.aboutPageVisibility = true;
      this.skillspgVisibility = true;
      this.educationAndExpPageVisibility = e.showEduAndExp;
      this.isHomeActive = false;
    }  
    
    if (!e.showSkills){
      this.homepgVisibility = true;
      this.aboutPageVisibility = true;
      this.skillspgVisibility = e.showSkills;
      this.educationAndExpPageVisibility = true;
      this.isHomeActive = false;
    } 
    
    if (!e.showAbout){
      this.homepgVisibility = true;
      this.aboutPageVisibility = e.showAbout;
      this.skillspgVisibility = true;
      this.educationAndExpPageVisibility = true;
      this.isHomeActive = false;
    } 
  }

  recieveUpdatedData(e:any) {
    this.isVisible = e;
    console.log("receieve from child");
  }

  handlevisibility(e:any) {
    this.isVisible = e;
    console.log("recieved from child: "+e)
  }

  sideBar() {
    // send false to child to open the sidebar
    this.isVisible = false;
    //this.messageFromParent = "open";
    console.log("Parent message to child: "+this.messageFromParent);
  }
}
