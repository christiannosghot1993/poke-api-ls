import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-imagen-perfil',
  templateUrl: './imagen-perfil.component.html',
  styleUrls: ['./imagen-perfil.component.css']
})
export class ImagenPerfilComponent implements OnInit {


  @Input() imgUrl: any;
  @Input() mostrarInputFile: boolean | undefined;
  @Input() registroCompleto=false;
  edad:any;
  dataRegistro = JSON.parse(localStorage.getItem('datosRegistro') + '');
  @Input() titulo: string = this.dataRegistro?this.dataRegistro.nombre:'';
  imgUsuarioVacio = '../../assets/img/user-empty.png';
  msg: string = '';
  constructor() {
    try {
      console.log('dataRegistroImagen:', this.dataRegistro);
      this.edad = new Date().getFullYear() - new Date(this.dataRegistro.cumpleanios).getFullYear();
      console.log('edad', this.edad);
    } catch (error) {
      console.log('error al calcular edad. Error: ',error);
    }

  }

  ngOnInit(): void {
  }

  subirImagen(event: any) {
    if (!event.target.files[0] || event.target.files[0].length == 0) {
      this.msg = 'Se debe seleccionar una imagen.';
      this.imgUrl = this.imgUsuarioVacio;
      localStorage.setItem('imgUrl', this.imgUrl);
      return;
    }

    var mimeType = event.target.files[0].type;

    if (mimeType.match(/image\/*/) == null) {
      this.msg = "El archivo seleccionado no es una imagen.";
      this.imgUrl = this.imgUsuarioVacio;
      localStorage.setItem('imgUrl', this.imgUrl);
      return;
    }
    console.log('event.target.files[0])', event.target.files[0]);
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);

    reader.onload = () => {
      this.msg = "";
      console.log('reader.result:', reader.result);
      this.imgUrl = reader.result;
      localStorage.setItem('imgUrl', this.imgUrl);
    }
  }

}
