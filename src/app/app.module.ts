import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponentComponent } from './app-components/footer-component/footer-component.component';
import { HomePageComponentComponent } from './app-components/home-page-component/home-page-component.component';
import { EdExpComponentComponent } from './app-components/ed-exp-component/ed-exp-component.component';
import { AboutPageComponentComponent } from './app-components/about-page-component/about-page-component.component';
import { LinksComponent } from './app-components/links/links.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './app-pages/home-page/home-page.component';
import { ProjectPageComponent } from './app-pages/project-page/project-page.component';
import { NavBarSliderComponent } from './app-components/nav-bar-slider/nav-bar-slider.component';
import { SkillsComponentComponent } from './app-components/skills-component/skills-component.component';
import { SkillBoxComponentComponent } from './app-components/skill-box-component/skill-box-component.component';
import { NavbarComponentComponent } from './app-components/navbar-component/navbar-component.component';
import { ProjectBoxComponent } from './app-components/project-box/project-box.component';
import { ActiveLinkService } from './app-services/active-link.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarSliderComponent,
    SkillsComponentComponent,
    SkillBoxComponentComponent,
    NavbarComponentComponent,
    FooterComponentComponent,
    HomePageComponentComponent,
    EdExpComponentComponent,
    AboutPageComponentComponent,
    LinksComponent,
    HomePageComponent,
    ProjectPageComponent,
    ProjectBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [ActiveLinkService],
  bootstrap: [AppComponent]
})
export class AppModule { }
