import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectComponent } from './project/project.component';
import { SkillComponent } from './skill/skill.component';

const routes: Routes = [
  {path:"", redirectTo: 'portfolio/about', pathMatch: 'full' },
  {path:"portfolio/about" , component:AboutComponent},
  {path:"portfolio/contact" , component:ContactComponent},
  {path:"portfolio/experience" , component:ExperienceComponent},
  {path:"portfolio/project" , component:ProjectComponent},
  {path:"portfolio/skill" , component:SkillComponent},
  {path:"**",component:AboutComponent,pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
