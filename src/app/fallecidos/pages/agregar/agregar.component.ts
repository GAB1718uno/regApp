
import { Component, OnInit } from '@angular/core';
import { FallecidosService } from '../../services/fallecidos.service';
import { Router } from '@angular/router';
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

      const {name,apellidos,nacio,fallecio,mote,url,url2,sepult} = this.miFormulario.value;

      this._fallecidoService.agregarMuerto(name,apellidos,nacio,fallecio,mote,url,url2,sepult)
      .subscribe(res => console.log("enviado a bd"))
  
      // imprimir el valor del formulario, sólo si es válido
      console.log(this.miFormulario.value);
    }

  mostrarSnack (mensaje:string){

    this._snackBar.open(mensaje, 'Cerrar', {
      duration:2500,
    } )
  }

}
