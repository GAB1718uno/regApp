import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Sepulturas } from '../../interfaces/sepulturas.interface';
import { SepulturaService } from '../../services/sepultura.service';
import { CompartidoService } from '../../../shared/compartido.service';

@Component({
  selector: 'app-agregar-sep',
  templateUrl: './agregar-sep.component.html',
  styleUrls: ['./agregar-sep.component.css']
})
export class AgregarSepComponent implements OnInit {

  mierda!:FormGroup

  formUbicacion:FormGroup;
  avatar: string = '';
  capturado1:any;
  nombreFile = ''; 
  imagenSubir!:File;
  items:Sepulturas[] = [{}];

  constructor(
    private fb:FormBuilder,
    private _sepulturaService:SepulturaService,
    private _compartidoService:CompartidoService
  ) {

    this.formUbicacion = this.fb.group({
      id:[''],
      calle:[''],
      numero:[''],
      avatar:[''],
      tipo:['']
    })
   }

  
  
  ngOnInit(): void {
    this._sepulturaService.obtenerSepulturas()
    .subscribe(
      resp => {
        this.items = resp;
        console.log(this.items)
      }
    )
  }

  imagenSeleccionada( event:any ){
    this.imagenSubir = event.target.files[0];
    console.log(this.imagenSubir)
  }

  /* showPreview(event:any) {
    const nombreImagen = event.target.files[0].name;
    console.log(nombreImagen)
  this.capturado1 = `/assets/images/${nombreImagen}`;
  this.nombreFile = nombreImagen;
   this.avatar= this.capturado1;
  } */

  uploadFile(){

    console.log(this.nombreFile)
    const {id, calle, numero, tipo } = this.formUbicacion.value;

    this._compartidoService.uploadFile(id, calle, numero, tipo, this.imagenSubir)
    .subscribe(resp=>
      console.log(resp))
  }
}