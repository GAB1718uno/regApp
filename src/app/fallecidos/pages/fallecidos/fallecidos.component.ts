import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Muertos } from '../../interfaces/fallecidos.interface';
import { FallecidosService } from '../../services/fallecidos.service';

@Component({
  selector: 'app-fallecidos',
  templateUrl: './fallecidos.component.html',
  styleUrls: ['./fallecidos.component.css']
})

export class FallecidosComponent {
  
  @Input() fallecido!: Muertos;

  constructor(private activatedRoute: ActivatedRoute,
    private fallecidosService: FallecidosService){
    this.activatedRoute.params
        .pipe(
          switchMap(({ id }) => this.fallecidosService.obtenerMuertoPorId(id))
        )
        .subscribe(
          resp =>
            this.fallecido = resp
        )
        }
}