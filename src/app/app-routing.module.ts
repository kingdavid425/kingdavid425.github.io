import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { HomeComponent } from './home/home.component';
import { LinksComponent } from './links/links.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "experience", component: ExperienceComponent },
  { path: "education", component: EducationComponent },
  { path: "skills", component: SkillsComponent },
  { path: "links", component: LinksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
