import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Muertos } from 'src/app/fallecidos/interfaces/fallecidos.interface';
import { FallecidosService } from 'src/app/fallecidos/services/fallecidos.service';

@Component({
  selector: 'app-detalle-fallecido',
  templateUrl: './detalle-fallecido.component.html',
  styleUrls: ['./detalle-fallecido.component.css']
})
export class DetalleFallecidoComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
    private fallecidosService: FallecidosService) {
this.activatedRoute.params
    .pipe(
      switchMap
        (
          ({ id }) => this.fallecidosService.obtenerMuertoPorId(id)
        )
    )
    .subscribe(fallecido => {
      this.fallecido = fallecido;
      console.log(fallecido.url); 
  })


    }

  fallecido: Muertos = {
    id:'',
    name: '',    
    apellidos:'',
    nacio:'',
    fallecio:'', 
    mote:'',
    url:'',     
    url2:'',
    sepult:'',
    sepulturaId:'',
    likes:0
  }; 

  ngOnInit(): void {
    
}

}