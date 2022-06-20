import { Component, Input } from '@angular/core';
import { Muertos } from 'src/app/fallecidos/interfaces/fallecidos.interface';
import { Router } from '@angular/router';
 

@Component({
  selector: 'app-fallecidos-tarjeta',
  templateUrl: './fallecidos-tarjeta.component.html',
  styleUrls: ['./fallecidos-tarjeta.component.css']
})
export class FallecidosTarjetaComponent {
  @Input() item!: Muertos;
  @Input() editarDeshabilitado = false;

constructor (
  private route:Router )
  {

  }

ngOnInit(): void {
 
}

navegar(){

  this.route.navigateByUrl(`fallecidos/${this.item.id}`)

}
}