import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Muertos } from 'src/app/fallecidos/interfaces/fallecidos.interface';
import { FallecidosService } from 'src/app/fallecidos/services/fallecidos.service';

@Component({
  selector: 'app-relacionados',
  templateUrl: './relacionados.component.html',
  styles: []
})
export class RelacionadosComponent implements OnInit  {

  constructor(private activatedRoute: ActivatedRoute,
    private fallecidosService: FallecidosService) {}

  fallecido!: Muertos;
   relacionados: Muertos[] = []

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
        console.log(fallecido)
      const sepult = fallecido.sepult;
      const id = fallecido.id;
      this.fallecidosService.obtenerRelacionados(this.fallecido.id!, this.fallecido.sepult!)
    .subscribe(relacionados => {
      const arrayNuevo = relacionados.filter(data => data.id != fallecido.id)
      console.log(this.fallecido)
      this.relacionados = 
      arrayNuevo;

      console.log(arrayNuevo);
      console.log(relacionados);
      
    })
    })
  }
}