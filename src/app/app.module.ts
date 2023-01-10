import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImagenPerfilComponent } from './imagen-perfil/imagen-perfil.component';
import { TituloCabeceraComponent } from './titulo-cabecera/titulo-cabecera.component';
import { RegistroPerfilComponent } from './registro-perfil/registro-perfil.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfiguracionInicialComponent } from './configuracion-inicial/configuracion-inicial.component';
import { PaginaSeleccionPokemonComponent } from './pagina-seleccion-pokemon/pagina-seleccion-pokemon.component';
import { HttpClientModule } from '@angular/common/http';
import { PaginaInformacionPokemonComponent } from './pagina-informacion-pokemon/pagina-informacion-pokemon.component';
import { DatosPokemonComponent } from './datos-pokemon/datos-pokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    ImagenPerfilComponent,
    TituloCabeceraComponent,
    RegistroPerfilComponent,
    ConfiguracionInicialComponent,
    PaginaSeleccionPokemonComponent,
    PaginaInformacionPokemonComponent,
    DatosPokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
