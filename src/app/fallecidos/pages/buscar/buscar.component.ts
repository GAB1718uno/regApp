import { Component, Input, OnInit } from '@angular/core';
import { Muertos } from '../../interfaces/fallecidos.interface';
import { FallecidosService } from 'src/app/fallecidos/services/fallecidos.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent  {
 seleccionadoApe = false;
 seleccionadoSep = false;
  option=2;

  activarOpcion(opcion:number){
    if (opcion==0){
     this.seleccionadoApe = true;
     this.seleccionadoSep = false;
    }
    if (opcion==1){
      this.seleccionadoSep = true;
      this.seleccionadoApe = false;
     }     
    this.option = opcion
  }



}
