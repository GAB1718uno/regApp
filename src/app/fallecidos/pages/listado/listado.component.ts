import { Component, Input, OnInit } from '@angular/core';
import { Muertos } from '../../interfaces/fallecidos.interface';
import { FallecidosService } from '../../services/fallecidos.service';
 
@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [`
  mat-card{
  }`
  ]
})
export class ListadoComponent implements OnInit {

  constructor(private _fallecidoService:FallecidosService) { }

  @Input() muerto!:Muertos;
  muertos:Muertos[]=[];
  prueba = true;

  ngOnInit(): void {
    this._fallecidoService.obtenerTodosMuertos()
    .subscribe(resp => {
      this.muertos = resp
});
}
}