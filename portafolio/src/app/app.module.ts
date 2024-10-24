import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';  // Importa el módulo de rutas

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule       // Importa las rutas
  ],
  providers: [],
  bootstrap: []  // Si 'AppComponent' es standalone, no se incluye aquí
})
export class AppModule { }
