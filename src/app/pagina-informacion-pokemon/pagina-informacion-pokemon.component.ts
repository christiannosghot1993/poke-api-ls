import { Component, Input, OnInit } from '@angular/core';
import { PokemonCaracteristicas } from '../models/pokemon-caracteristicas.models';
import { PokemonInformacionBase } from '../models/pokemon-informacion-base.model';
import { PokeApiService } from '../poke-api.service';

@Component({
  selector: 'app-pagina-informacion-pokemon',
  templateUrl: './pagina-informacion-pokemon.component.html',
  styleUrls: ['./pagina-informacion-pokemon.component.css']
})
export class PaginaInformacionPokemonComponent implements OnInit {

  listadoPokemons: PokemonInformacionBase[] = JSON.parse(localStorage.getItem('pokemonsSeleccionados') + '');
  imgUrl = localStorage.getItem('imgUrl');
  dataRegistro = JSON.parse(localStorage.getItem('datosRegistro') + '');
  pokemonEstadisticasListado: PokemonCaracteristicas[] = [];
  constructor(private pokeApiService: PokeApiService) {

  }

  ngOnInit(): void {
    
    this.listadoPokemons.map(x => {
      this.pokeApiService.getPokemonById(this.pokeApiService.urlApiPokemon + '/' + x.id).subscribe(res => {
        console.log(res);
        let pokemon: PokemonCaracteristicas = {
          name: res.name,
          image: res.sprites.other.dream_world.front_default,
          tipo: res.types[0].type.name,
          hp: res.stats[0].base_stat,
          ataque: res.stats[1].base_stat,
          defensa: res.stats[2].base_stat,
          ataqueEspecial: res.stats[3].base_stat,
          defensaEspecial: res.stats[4].base_stat,
          velocidad: res.stats[5].base_stat
        };
        this.pokemonEstadisticasListado.push(pokemon);
        console.log('this.pokemonEstadisticasListado', this.pokemonEstadisticasListado);
      });
    });
  }

}
