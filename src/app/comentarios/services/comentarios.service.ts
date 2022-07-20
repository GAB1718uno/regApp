import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Comentarios } from '../interfaces/comentarios.interface';

@Injectable({
  providedIn: 'root'
})
export class ComentariosService {

  constructor(private http:HttpClient) {}

  private baseUrl = environment.baseUrl;

  crearComentarios (usuarioId:any, fallecidoId:any, comentado:any, comentario:any)
{
  const url = `${ this.baseUrl}/comentarios/`;
  const body = { usuarioId, fallecidoId, comentado, comentario }
  
  return this.http.post<Comentarios>( url , body )


}

obtenerComentarios (): Observable<Comentarios[]>
{
  console.log()
  const url = `${ this.baseUrl}/comentarios/`;
  
  return this.http.get<Comentarios[]>( url )
}

obtenerLikesIndividuales (fallecidoId:any): Observable<Comentarios[]>
{
  console.log()
  const url = `${ this.baseUrl}/likes/${fallecidoId}`;
  
  return this.http.get<Comentarios[]>( url )
}

}
