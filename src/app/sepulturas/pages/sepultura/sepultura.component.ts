import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Muertos } from 'src/app/fallecidos/interfaces/fallecidos.interface';
import { FallecidosService } from 'src/app/fallecidos/services/fallecidos.service';
import { Sepulturas } from '../../interfaces/sepulturas.interface';
import { SepulturaService } from '../../services/sepultura.service';
import { environment } from 'src/environments/environment';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-sepultura',
  templateUrl: './sepultura.component.html',
  styles: [`
  img {
    width:100%;
    border-radius:10px;
  }`
  ]
})
export class SepulturaComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
    private fallecidosService: FallecidosService,
    private _sepulturaService: SepulturaService) {}

  fallecido!: Muertos; 
  sepultura:Sepulturas={
    calle:'',
    numero:''
  };
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
      this._sepulturaService.obtenerSepultura(fallecido.sepulturaId)
      .subscribe(resp => {
        this.sepultura = resp;
        /* 
        this._compartido.obtenerImagen(this.sepultura.tipo, this.sepultura.avatar)
        .subscribe(avatar => {
          console.log(avatar) */
          this.imagenUrl=`${ this.baseUrl }/uploads/sepulturas/${this.sepultura.avatar}`;
        console.log(fallecido)
        console.log(resp)
      }
        
        )
        
      }
        )
  }

}

