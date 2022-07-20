import { Component, Input, OnInit, Output } from '@angular/core';
import { Muertos } from '../../interfaces/fallecidos.interface';
import { FallecidosService } from '../../services/fallecidos.service';
import { Likes } from '../../../shared/interfaces/likes';
import { CompartidoService } from '../../../shared/compartido.service';
 
@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [`
  mat-card{
  }`
  ]
})
export class ListadoComponent implements OnInit {

  contadorAqui:number = 1;
  muertos:Muertos[]=[];
  prueba = true;
  likes:Likes[] = [{
    
    id:'',
    usuarioId:'',
    createdAt:'',
    valor:0,
    like:false,
    updatedAt:    '',
    fallecidoId: ''
  }];

  constructor(private _fallecidoService:FallecidosService,
    private _compartidoService:CompartidoService) { 
    
  
      
      this._compartidoService.obtenerLikes()
  .subscribe( data => {
    this.likes=data;
    console.log(data)

    this._fallecidoService.obtenerTodosMuertos()
    .subscribe(resp => {
      this.muertos = resp
    })

    


  })
 

    }


  ngOnInit(): void {
    
}
}