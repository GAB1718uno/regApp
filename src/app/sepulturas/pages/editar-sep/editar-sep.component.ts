import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Sepulturas } from '../../../sepulturas/interfaces/sepulturas.interface';
import { environment } from '../../../../environments/environment.prod';
import { SepulturaService } from '../../services/sepultura.service';
import { CompartidoService } from '../../../shared/compartido.service';

@Component({
  selector: 'app-editar-sep',
  templateUrl: './editar-sep.component.html',
  styleUrls: ['./editar-sep.component.css']
})
export class EditarSepComponent implements OnInit {

  sepultura:Sepulturas = {
    id:'',
    calle:'',
    numero:'',
    avatar:'',
    tipo:''
  };
  formUbicacion:FormGroup;
  imagenSubir!:File;
  baseUrl = environment.baseUrl;
  imagenUrl = `${ this.baseUrl }/uploads/${this.sepultura.tipo}/${this.sepultura.avatar}`;

  //nueva: FormControl = this.fb.control(this.sepultura.calle)
  
  constructor(private _activatedRoute:ActivatedRoute,
    private _sepulturaService:SepulturaService,
    private _compartidoService:CompartidoService,
    private fb:FormBuilder,) {
      
      this.formUbicacion = this.fb.group({
        id:[''],
        calle:[''],
        numero:[''],
        avatar:[''],
        tipo:[''],
        createdAt:[''],
        updatedAt:['']
      })
      


    this._activatedRoute.params
        .pipe(
          switchMap(({ id }) => this._sepulturaService.obtenerSepultura(id))
        )
        .subscribe(
          resp =>{

            this.sepultura = resp
            this.formUbicacion.setValue(this.sepultura)
            console.log(this.formUbicacion)
        })
        }

        imagenSeleccionada( event:any ){
          this.imagenSubir = event.target.files[0];
          console.log(this.imagenSubir)
        }

        

        actualizar(){

          // console.log(this.nombreFile)
          const {calle, numero, tipo } = this.formUbicacion.value;
      
          this._compartidoService.updateSep(this.sepultura.id, calle, numero, tipo, this.imagenSubir)
          .subscribe(resp=>
            console.log(resp))
        }

  ngOnInit(): void {
  }

}
