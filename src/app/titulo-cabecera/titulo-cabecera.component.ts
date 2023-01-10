import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-titulo-cabecera',
  templateUrl: './titulo-cabecera.component.html',
  styleUrls: ['./titulo-cabecera.component.css']
})
export class TituloCabeceraComponent implements OnInit {
  @Input() titulo: string|undefined;
  @Input() subtitulo: string|undefined;
  @Input() style: string|undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
