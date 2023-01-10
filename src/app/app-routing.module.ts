import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfiguracionInicialComponent } from './configuracion-inicial/configuracion-inicial.component';
import { PaginaInformacionPokemonComponent } from './pagina-informacion-pokemon/pagina-informacion-pokemon.component';
import { PaginaSeleccionPokemonComponent } from './pagina-seleccion-pokemon/pagina-seleccion-pokemon.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'
  },
  {
    path:'home',
    component:ConfiguracionInicialComponent 
  },
  {
    path:'seleccionar-pokemon',
    component:PaginaSeleccionPokemonComponent
  },
  {
    path:'info-pokemon',
    component:PaginaInformacionPokemonComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
