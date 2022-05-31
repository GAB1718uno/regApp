
import { Component, OnInit } from '@angular/core';
import { FallecidosService } from '../../services/fallecidos.service';
import { Muertos } from '../../interfaces/fallecidos.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css' ]
})
export class AgregarComponent implements OnInit {

  constructor(
    private _fallecidoService:FallecidosService,
    private route:Router,
    private _snackBar:MatSnackBar,
    private fb : FormBuilder
    ) { }
    
        miFormulario: FormGroup = this.fb.group({
        name: ['', [Validators.required]],
        apellidos: ['', [Validators.required]],
        nacio: ['', [Validators.required]],
        fallecio: ['', [Validators.required]],
        mote: ['', [Validators.required]],
        url: ['', [Validators.required]],
        url2: ['', [Validators.required]],
        sepult: ['', [Validators.required]]
      })

      consentimiento = true;

    ngOnInit(): void {

    }

    campoEsValido(dato:string){

    }

    guardar() {

    
      /* if ( this.miFormulario.valid ) {
        this.miFormulario.markAllAsTouched();
        return;
      } */

      const {name,apellidos,nacio,fallecio,mote,url,url2,sepult} = this.miFormulario.value;

      this._fallecidoService.agregarMuerto(name,apellidos,nacio,fallecio,mote,url,url2,sepult)
      .subscribe(res => console.log("enviado a bd"))
  
      // imprimir el valor del formulario, sólo si es válido
      console.log(this.miFormulario.value);
    }

 /*  muerto:Muertos = {
    name:'',
    apellidos: '',
    nacio:     '',
    fallecio:  '',
    mote:      '',
    url:       '',
    url2: '',
    sepult: '',
  }

  muertoRecibido:Muertos = {
    name:'',
    apellidos: '',
    nacio:     '',
    fallecio:  '',
    mote:      '',
    url:       '',
    url2: '',
    sepult: '',
  }

  tontaa = ''
  dato = '';
  dato1 = '';

  capturado:any;
  capturado1:any;

  

  

  ngOnInit(): void {
    
    
  
  }

  fechaFallecio(dateObject:any){
    const fallecio = dateObject.value.toLocaleString().substring(0, 10)
console.log(fallecio)
const fallecioFinal = fallecio.replace(",","")
this.muerto.fallecio=fallecioFinal;
}

fechaNacio(dateObject:any){
  const nacio = dateObject.value.toLocaleString().substring(0, 10)
console.log(nacio)
const nacioFinal = nacio.replace(",","")
this.muerto.nacio=nacioFinal;
}

  agregarMuerto(){

    if (this.muerto.name?.trim().length === 0){
      return
    }

    if (this.muerto.id){
      this.muerto.sepult = (this.dato1.toString() + ', ' + this.dato.toString());
    console.log(this.muerto.sepult);
      this._fallecidoService.actualizarMuerto(this.muerto)
      .subscribe(actualizando => this.mostrarSnack('Datos actualizados'))
    } else {
      //creamos
    console.log(this.dato);console.log(this.dato1)
    this.muerto.sepult = (this.dato1.toString() + ', ' + this.dato.toString());
    console.log(this.muerto.sepult);
    this._fallecidoService.agregarMuerto(this.muerto)
    .subscribe(agregar => {
      this.mostrarSnack('Datos Guardados con exito')
    })
    console.log(this.muerto)
  }
  this.route.navigateByUrl(`/fallecidos/listado`);
}

  capturarFallecido(event:any){

const nombreImagen = event.target.files[0].name;
this.capturado = `/assets/images/${nombreImagen}`
this.muerto.url = this.capturado;

}
 
capturarSepultura(event:any){

  const nombreImagen = event.target.files[0].name;
  this.capturado1 = `/assets/images/${nombreImagen}`
  this.muerto.url2 = this.capturado1;
  
  } */

  mostrarSnack (mensaje:string){

    this._snackBar.open(mensaje, 'Cerrar', {
      duration:2500,
    } )
  }

}
