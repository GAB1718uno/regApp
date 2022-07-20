import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Muertos } from '../../interfaces/fallecidos.interface';
import { FallecidosService } from '../../services/fallecidos.service';

@Component({
  selector: 'app-fallecidos',
  templateUrl: './fallecidos.component.html',
  styleUrls: ['./fallecidos.component.css']
})

export class FallecidosComponent implements OnInit {
  
  @Input() fallecido: Muertos = {
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

  constructor(private activatedRoute: ActivatedRoute,
    private fallecidosService: FallecidosService){
    
        }

        ngOnInit(): void{

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