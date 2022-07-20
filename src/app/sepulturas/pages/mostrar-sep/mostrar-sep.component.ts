import { Component, OnInit } from '@angular/core';
import { Sepulturas } from '../../../sepulturas/interfaces/sepulturas.interface';
import { Router } from '@angular/router';
import { SepulturaService } from '../../services/sepultura.service';

@Component({
  selector: 'app-mostrar-sep',
  templateUrl: './mostrar-sep.component.html',
  styleUrls: ['./mostrar-sep.component.css']
})
export class MostrarSepComponent implements OnInit {

  constructor(
    private _sepulturaSerice:SepulturaService,
    private route:Router
  ) { 


    _sepulturaSerice.obtenerSepulturas()
    .subscribe(resp => {
      this.item = resp;
    })
  }

  item:Sepulturas[] = [];
  


  ngOnInit(): void {
    
  }

  

}
