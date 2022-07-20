import { Component, Input, OnInit } from '@angular/core';
import { Muertos } from '../../interfaces/fallecidos.interface';
import { FallecidosService } from '../../services/fallecidos.service';

@Component({
  selector: 'app-porapellido',
  templateUrl: './porapellido.component.html',
  styles: [
  ]
})
export class PorapellidoComponent implements OnInit {
  @Input() seleccionadoA!:boolean;
  @Input() seleccionadoS!:boolean;
  cribados:Muertos[] = []
  cribadosSepult:Muertos[]=[]
  termino:string = ''
  hayerror=false;
  apellidoPreview=this.seleccionadoA;
  sepulturaPreview=this.seleccionadoS;
  activo=1;
  

  constructor( private _fallecidoService: FallecidosService ) { }

  ngOnInit(): void {

    
  }
  
  cambiaBusqueda(){

    if (this.seleccionadoA){
      this.activo=1
      
    } else { this.activo = 2}

    switch ( this.activo ) {
      case 1:
        this.apellidoPreview=true;
    this.sepulturaPreview=false;
    this.hayerror=false;
    this._fallecidoService.obtenerMuertoCribados(this.termino, 'apellido')
    .subscribe(resp => {
      this.cribados = resp;
      if(this.termino == '' || this.cribados.length < 1 ) {
        this.hayerror=true;
      }
      this.activo=0;
      
      console.log(resp)
    })
    break;
    
    case 2:
      this.apellidoPreview=false;
      this.sepulturaPreview=true;
      this.hayerror=false;
      this._fallecidoService.obtenerMuertoCribados(this.termino, 'sepultura')
      .subscribe(resp => {
        this.cribados = resp;
        if(this.termino == '' || this.cribados.length < 1 ) {
          this.hayerror=true;
        } 
        this.activo=0;
        console.log(resp)
      })
      
        break;
    
      default:
        break;
    }
}
}