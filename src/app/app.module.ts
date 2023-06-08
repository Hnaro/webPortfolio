import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarSliderComponent } from './nav-bar-slider/nav-bar-slider.component';
import { SkillsComponentComponent } from './skills-component/skills-component.component';
import { SkillBoxComponentComponent } from './skill-box-component/skill-box-component.component';
import { NavbarComponentComponent } from './navbar-component/navbar-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { HomePageComponentComponent } from './home-page-component/home-page-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarSliderComponent,
    SkillsComponentComponent,
    SkillBoxComponentComponent,
    NavbarComponentComponent,
    FooterComponentComponent,
    HomePageComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
