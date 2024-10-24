import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './home/home.component';  // Asegúrate de tener un componente Home
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { StudiesComponent } from './studies/studies.component';

const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' },  // Redirige la raíz ('/') a 'landing'
  { path: 'landing', component: LandingComponent },  // Página de inicio en landing
  { path: 'home', component: HomeComponent },        // Página 'home'
  { path: 'about', component: AboutComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'studies', component: StudiesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
