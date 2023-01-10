import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-configuracion-inicial',
  templateUrl: './configuracion-inicial.component.html',
  styleUrls: ['./configuracion-inicial.component.css']
})
export class ConfiguracionInicialComponent implements OnInit {
  urlImagen = '../../assets/img/user-empty.png';
  cargando: boolean = false;
  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  registroAgregado(dataRegistro: string) {
    console.log('dataRegistro:', dataRegistro);
    localStorage.setItem('datosRegistro', dataRegistro);
    this.cargando = true;
    setTimeout(() => {
      let width: number = window.screen.width;
      let height: number = window.screen.height;

      window.innerWidth = width;
      window.innerHeight = height;

      this.router.navigate(['seleccionar-pokemon']);
      this.cargando = false;
    }, 3000);

  }
}
