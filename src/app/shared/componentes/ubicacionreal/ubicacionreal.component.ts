import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Muertos } from 'src/app/fallecidos/interfaces/fallecidos.interface';
import { FallecidosService } from 'src/app/fallecidos/services/fallecidos.service';

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
    private fallecidosService: FallecidosService) {}

  fallecido!: Muertos; 

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
  })

}

}