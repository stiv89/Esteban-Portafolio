import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { StudiesComponent } from './studies/studies.component';

export const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' },  // Redirige la raíz ('/') a 'landing'
  { path: 'landing', component: LandingComponent },  // Página de inicio (landing)
  { path: 'home', component: HomeComponent },  // Página 'home'
  { path: 'about', component: AboutComponent },  // Página 'about'
  { path: 'experience', component: ExperienceComponent },  // Página 'experience'
  { path: 'studies', component: StudiesComponent }  // Página 'studies'
];
