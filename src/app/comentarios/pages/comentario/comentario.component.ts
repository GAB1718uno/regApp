import { Component, OnInit } from '@angular/core';
import { Comentarios } from '../../interfaces/comentarios.interface';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../../../auth/service/auth.service';
import { ActivatedRoute } from '@angular/router';
import { FallecidosService } from '../../../fallecidos/services/fallecidos.service';
import { switchMap } from 'rxjs';
import { Muertos } from 'src/app/fallecidos/interfaces/fallecidos.interface';
import { ComentariosService } from '../../services/comentarios.service';

@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.css']
})
export class ComentarioComponent implements OnInit {

  //comentarios:Comentarios = {}
  formComents!:FormGroup;
  step = 0;

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

  constructor(
    private _comentariosService:ComentariosService,
    private _authService:AuthService,
    private activatedRoute:ActivatedRoute,
    private fallecidosService:FallecidosService,
    private fb:FormBuilder,
  ) {
    

   }

  ngOnInit(): void {
    this.formComents = this.fb.group({
      id: [''],
      usuarioId:[''],      
    createdAt:[''], 
    comentario: [''],
    comentado:[false],
    updatedAt:[''],     
    fallecidoId:[''], 
      
    })

    this.activatedRoute.params
    .pipe(
      switchMap(({ id }) => this.fallecidosService.obtenerMuertoPorId(id))
    )
    .subscribe(
      resp => {this.fallecido = resp}
    )
  }

  get usuario (){
    return this._authService.usuario;
  }

  setStep(step:any){

  }

  enviarComentario(){
    // Al pulsar el boton de enviar añadimos los valores que recogemos de los campos
    this.formComents.get('comentado')?.setValue(true)
    this.formComents.get('usuarioId')?.setValue(this.usuario.uid)
    this.formComents.get('fallecidoId')?.setValue(this.fallecido.id)

    
     const {  id, usuarioId, comentario, comentado, fallecidoId } = this.formComents.value;
    
     console.log(this.formComents.value)
     console.log(comentario)
     console.log(comentado)
    console.log(this.usuario)
    this._comentariosService.crearComentarios(usuarioId,fallecidoId,comentado,comentario)
    .subscribe()
    this.step=1;
  }

  nextStep(){}
  
  prevStep(){}

}
