import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-datos-pokemon',
  templateUrl: './datos-pokemon.component.html',
  styleUrls: ['./datos-pokemon.component.css']
})
export class DatosPokemonComponent implements OnInit {

  @Input() name:string|undefined;
  @Input() image:any;
  @Input() tipo:string|undefined;
  @Input() hp:string|undefined;
  @Input() ataque:string|undefined;
  @Input() defensa:string|undefined;
  @Input() ataqueEspecial:string|undefined;
  @Input() defensaEspecial:string|undefined;
  @Input() velocidad:string|undefined;
  constructor() { }

  ngOnInit(): void {
    console.log('image',this.image);
  }

}
