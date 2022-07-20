import { Component, OnInit } from '@angular/core';
import { FallecidosService } from 'src/app/fallecidos/services/fallecidos.service';
import { ActivatedRoute } from '@angular/router';
import { Muertos } from '../../interfaces/fallecidos.interface';
import { switchMap } from 'rxjs';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: []
})
export class EditarComponent implements OnInit {

  constructor(
    private _fallecidosService: FallecidosService,
    private _activatedRoute: ActivatedRoute,
    private _snackBar: MatSnackBar) { }

  muerto: Muertos = {
    name: '',
    apellidos: '',
    nacio: '',
    fallecio: '',
    mote: '',
    url: '',
    url2: '',
    sepult: '',
    sepulturaId:''
  }

  mostrarFecha = false;
  nacio = false;
  mostrarFechaDef = false;
  fallecio = false;


  ngOnInit(): void {
    this._activatedRoute.params
      .pipe(
        switchMap(({ id }) => this._fallecidosService.obtenerMuertoPorId(id))
      )
      .subscribe(
        resp =>
          this.muerto = resp
      )
  }

    actualizar() {
      
      this._fallecidosService.actualizarMuerto(this.muerto)
      .subscribe( actualiza => this.mostrarSnack('Actualizado con éxito!!!'));
    console.log(this.muerto)
  }
  eliminar() {
    console.log('muerto eliminado')
  }
  capturarFallecido(event: any) {
    let capturado = '';
    const nombreImagen = event.target.files[0].name;
    capturado = `/assets/images/${nombreImagen}`
    this.muerto.url = capturado;
  }

  capturarSepultura(event: any) {
    let capturado1 = '';
    const nombreImagen = event.target.files[0].name;
    capturado1 = `/assets/images/${nombreImagen}`
    this.muerto.url2 = capturado1;

  }

  modificarNacio() {
    this.nacio = true;
    this.mostrarFecha = true;
  }

  modificarFallecio() {

    this.fallecio = true;
    this.mostrarFechaDef = true;
  }

  fechaNacio(dateObject: any) {
    const nacio = dateObject.value.toLocaleString().substring(0, 10)
    console.log(nacio)
    const nacioFinal = nacio.replace(",", "")
    this.muerto.nacio = nacioFinal;
  }

  fechaFallecio(dateObject: any) {
    const fallecio = dateObject.value.toLocaleString().substring(0, 10)
    console.log(fallecio)
    const fallecioFinal = fallecio.replace(",", "")
    this.muerto.fallecio = fallecioFinal;
  }

  mostrarSnack (mensaje:string){

    this._snackBar.open(mensaje, 'Cerrar', {
      duration:2500,
    } )
  }

}
