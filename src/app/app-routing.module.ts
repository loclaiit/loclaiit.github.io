import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectComponent } from './project/project.component';
import { SkillComponent } from './skill/skill.component';

const routes: Routes = [
  {path:"", redirectTo: 'about', pathMatch: 'full' },
  {path:"about" , component:AboutComponent},
  {path:"contact" , component:ContactComponent},
  {path:"experience" , component:ExperienceComponent},
  {path:"project" , component:ProjectComponent},
  {path:"skill" , component:SkillComponent},
  {path:"**",component:AboutComponent,pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
