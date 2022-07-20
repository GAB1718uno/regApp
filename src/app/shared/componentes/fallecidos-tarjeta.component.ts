import { Component, Input } from '@angular/core';
import { Muertos } from 'src/app/fallecidos/interfaces/fallecidos.interface';
import { Router } from '@angular/router';
import { Likes } from '../interfaces/likes';
import { AuthService } from '../../auth/service/auth.service';
import { CompartidoService } from '../compartido.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
 

@Component({
  selector: 'app-fallecidos-tarjeta',
  templateUrl: './fallecidos-tarjeta.component.html',
  styleUrls: ['./fallecidos-tarjeta.component.css']
})
export class FallecidosTarjetaComponent {
  @Input() item: Muertos = {
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
  muertos : Muertos[] = [];
  @Input() editarDeshabilitado = false;
  @Input() likes: Likes[] = [{
    id:'',
    usuarioId:'',
    createdAt:'',
    valor:0,
    like:false,
    updatedAt:'',
    fallecidoId:'',
  }];
  @Input() contador:number=0;
  total:any = 0;
  apretado = false;

  
  
  constructor (
    private _matIcon: MatIconRegistry,
    private _domSatanizer:DomSanitizer,
    private route:Router,
    private _authService:AuthService,
    private _compartidoService:CompartidoService,
    )
    
    {
    _matIcon.addSvgIcon("vela2",
      _domSatanizer.bypassSecurityTrustResourceUrl("../assets/images/icons/vela2.svg"));
      _matIcon.addSvgIcon("vela3",
      _domSatanizer.bypassSecurityTrustResourceUrl("../assets/images/icons/vela3.svg"));
      _matIcon.addSvgIcon("corazon1",
      _domSatanizer.bypassSecurityTrustResourceUrl("../assets/images/icons/corazon1.svg"))
    
  }


ngOnInit(): void {
    

this._compartidoService.obtenerLikes()
.subscribe(resp=>{

  const arrayNuevo = resp.filter(resulta => resulta.fallecidoId == this.item.id);
  this.total = arrayNuevo
  .filter(
    resultado => {
    resultado.fallecidoId?.length
      console.log(resultado);
  }
  )
  this.contador=  arrayNuevo.length;

  
  console.log(this.total);
  console.log(resp)
})
 
}

get usuario (){
  return this._authService.usuario;
}

navegar(){

  this.route.navigateByUrl(`fallecidos/${this.item.id}`)

}

like(){

  if (!this.apretado){
 
  this.contador = this.contador + 1;
  this.likes[0].like = true;
  this.likes[0].fallecidoId=this.item.id;
  this.likes[0].usuarioId=this.usuario.uid;
  this.likes[0].valor=this.contador;
  this.likes[0].createdAt= new Date().toDateString();
  this.likes[0].updatedAt= new Date().toLocaleDateString();
  this.apretado=true;
} else {
  this.contador = this.contador -1
  this.apretado=false;
}
  
  console.log(this.item)
  console.log(this.likes)
  console.log(this.contador)

  this._compartidoService.crearLikes( this.likes[0].usuarioId, this.likes[0].fallecidoId,this.likes[0].valor,this.likes[0].like)
  .subscribe( resp => {

    console.log(resp)
  })

}

}