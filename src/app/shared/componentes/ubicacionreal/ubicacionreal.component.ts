import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Muertos } from 'src/app/fallecidos/interfaces/fallecidos.interface';
import { FallecidosService } from 'src/app/fallecidos/services/fallecidos.service';
import { environment } from 'src/environments/environment';
import { CompartidoService } from '../../compartido.service';
import { Sepulturas } from '../../interfaces/sepulturas.interface';

@Component({
  selector: 'app-ubicacion-real',
  templateUrl: './ubicacionreal.component.html',
  styles: [`
  img {
    width:100%;
    border-radius:10px;
  }`
  ]
})
export class UbicacionComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
    private fallecidosService: FallecidosService,
    private _compartido: CompartidoService) {}

  fallecido!: Muertos; 
  sepultura!:Sepulturas;
  imagenUrl:any = []
  private baseUrl = environment.baseUrl;



  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap
        (
          ({ id }) => this.fallecidosService.obtenerMuertoPorId(id)
        )
    )
    .subscribe(fallecido => {
      this.fallecido = fallecido;
      this._compartido.obtenerSepultura(fallecido.sepulturaId)
      .subscribe(resp => {
        this.sepultura = resp;
        /* 
        this._compartido.obtenerImagen(this.sepultura.tipo, this.sepultura.avatar)
        .subscribe(avatar => {
          console.log(avatar) */
          this.imagenUrl=`${ this.baseUrl }/uploads/${this.sepultura.tipo}/${this.sepultura.avatar}`;
        console.log(fallecido)
        console.log(resp)
      }
        
        )
        
      }
        )
  }

}

