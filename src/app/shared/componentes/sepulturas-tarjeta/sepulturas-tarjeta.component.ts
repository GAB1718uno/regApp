import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sepulturas } from 'src/app/sepulturas/interfaces/sepulturas.interface';
import { SepulturaService } from 'src/app/sepulturas/services/sepultura.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-sepulturas-tarjeta',
  templateUrl: './sepulturas-tarjeta.component.html',
  styleUrls: ['./sepulturas-tarjeta.component.css']
})
export class SepulturasTarjetaComponent implements OnInit {
 
  constructor(
    private _sepulturaSerice:SepulturaService,
    private route:Router
  ) { }

  @Input() seps : Sepulturas = {}
  sepulturas:Sepulturas[] = [];
  imagenUrl:any = []
  private baseUrl = environment.baseUrl;

  ngOnInit(): void {
    this._sepulturaSerice.obtenerSepulturas()
    .subscribe(resp => {
      console.log(resp);
      this.sepulturas = resp;

      this.imagenUrl=`${ this.baseUrl }/uploads/`;
    })
  }

  editar(id:any){
    this.route.navigateByUrl(`/sepulturas/editarsep/${id}`)
  }

}
