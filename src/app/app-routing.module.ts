import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './app-pages/home-page/home-page.component';
import { ProjectPageComponent } from './app-pages/project-page/project-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'projects',
    component: ProjectPageComponent,
    data: {
      projectisActive: "some data"
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
