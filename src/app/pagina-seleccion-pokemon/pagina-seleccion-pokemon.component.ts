import { AbstractType, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonInformacionBase } from '../models/pokemon-informacion-base.model';
import { PokeApiService } from '../poke-api.service';


@Component({
  selector: 'app-pagina-seleccion-pokemon',
  templateUrl: './pagina-seleccion-pokemon.component.html',
  styleUrls: ['./pagina-seleccion-pokemon.component.css']
})
export class PaginaSeleccionPokemonComponent implements OnInit {

  cargando:boolean=false;
  imgUrl = localStorage.getItem('imgUrl');
  pokemonList:PokemonInformacionBase[]=[]; //[PokemonInformacionBase] | undefined;

  constructor(private pokeApiService: PokeApiService, private router: Router) {

    pokeApiService.getAllPokemons().subscribe(res => {

      const resultsArray: [{
        name: string,
        url: string
      }] = res.results;

      for (let result of resultsArray) {
        pokeApiService.getPokemonById(result.url).subscribe(res => {
          let pokemon: PokemonInformacionBase = {
            id: res.id,
            name: res.name,
            image: res.sprites.front_default,
            seleccionado:false
          };
          this.pokemonList.push(pokemon);
        });
      }
      console.log('this.pokemonList',this.pokemonList);
    });
  }

  seleccionarPokemon(pokemon:PokemonInformacionBase){
    
    if(this.validarPokemosSeleccionados()){
      if(pokemon.seleccionado){
        pokemon.seleccionado=!pokemon.seleccionado;
      }
      
    }else{
      pokemon.seleccionado=!pokemon.seleccionado;
    }
    
    
  }
  ngOnInit(): void {
    
  }

  validarPokemosSeleccionados():boolean{
    if(this.pokemonList.filter(X=>X.seleccionado).length==3){
      return true;
    }else{
      return false;
    }
  }

  mostrarEstadisticasPokemonSeleccionado(){
    console.log('Pokemons seleccionados: ',this.pokemonList.filter(x=>x.seleccionado==true));
    this.cargando=true;
    setTimeout(() => {
      localStorage.setItem('pokemonsSeleccionados', JSON.stringify(this.pokemonList.filter(x=>x.seleccionado==true)));
      this.router.navigate(['info-pokemon']);
      this.cargando=false;
    }, 3000);
  }

  habilitarBotonGuardar(){
    let numeroPokemonsSeleccionados=this.pokemonList.filter(x=>x.seleccionado==true).length;
    if(numeroPokemonsSeleccionados==3){
      return false;
    }else{
      return true;
      
    }
  }
}
