import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CompartidoService } from '../../compartido.service';

@Component({
  selector: 'app-crear-ubicacion',
  templateUrl: './crear-ubicacion.component.html',
  styleUrls: ['./crear-ubicacion.component.css']
})
export class CrearUbicacionComponent implements OnInit {

  formUbicacion:FormGroup;
  avatar: string = '';
  capturado1:any;
  nombreFile = ''; 
  imagenSubir!:File;

  constructor(
    private fb:FormBuilder,
    private _compartidoService:CompartidoService
  ) {

    this.formUbicacion = this.fb.group({
      calle:[''],
      numero:[''],
      avatar:[''],
      tipo:['']
    })
   }

  
  
  ngOnInit(): void {
  }

  imagenSeleccionada( event:any ){
    this.imagenSubir = event.target.files[0];
    console.log(this.imagenSubir)
  }

  showPreview(event:any) {
    const nombreImagen = event.target.files[0].name;
    console.log(nombreImagen)
  this.capturado1 = `/assets/images/${nombreImagen}`;
  this.nombreFile = nombreImagen;
   this.avatar= this.capturado1;
  }

  uploadFile(){

    console.log(this.nombreFile)
    const {calle, numero, tipo } = this.formUbicacion.value;

    this._compartidoService.uploadFile(calle, numero, tipo, this.imagenSubir)
    .subscribe(resp=>
      console.log(resp))
  }
}