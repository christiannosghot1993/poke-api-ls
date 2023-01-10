import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  urlApiPokemon='https://pokeapi.co/api/v2/pokemon';
  constructor(private http: HttpClient) { 

  }

  getAllPokemons():Observable<any>{
    return this.http.get(this.urlApiPokemon);//+'/?limit=1000');
  }

  getPokemonById(url:string):Observable<any>{
    return this.http.get(url);
  }
}
