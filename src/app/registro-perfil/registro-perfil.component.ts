import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-registro-perfil',
  templateUrl: './registro-perfil.component.html',
  styleUrls: ['./registro-perfil.component.css']
})
export class RegistroPerfilComponent implements OnInit {

  @Output() informacionRegistro = new EventEmitter<string>();
  pasatiempos = [
    {
      codigo: '1',
      descripcion: 'Jugar Fútbol'
    },
    {
      codigo: '2',
      descripcion: 'Jugar Basquetball'
    },
    {
      codigo: '3',
      descripcion: 'Jugar Tennis'
    },
    {
      codigo: '4',
      descripcion: 'Jugar Voleibol'
    },
    {
      codigo: '5',
      descripcion: 'Jugar Fifa'
    },
    {
      codigo: '6',
      descripcion: 'Jugar Videojuegos'
    }
  ];
  formRegistro = this.fb.group({
    nombre: ['', Validators.required],
    pasatiempo: [''],
    cumpleanios: ['', Validators.required],
    dui: ['', Validators.required],
  });
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  guardarInformacionRegistro() {
    console.log('inicia guardado de registro');
    let dataFormularioJson:string=JSON.stringify(this.formRegistro.value);
    console.log(dataFormularioJson);
    this.informacionRegistro.emit(dataFormularioJson);
  }
}
