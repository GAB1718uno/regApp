import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Files } from '../fallecidos/interfaces/fallecidos.interface';
import { Observable, tap, map, switchMap, filter, toArray } from 'rxjs';
import { Sepulturas } from '../sepulturas/interfaces/sepulturas.interface';
import { Likes } from './interfaces/likes';

@Injectable({
  providedIn: 'root'
})
export class CompartidoService {

  constructor(private http:HttpClient) {}

  private baseUrl = environment.baseUrl;
    private _files!:Files[];
  
    get files(){
      return { ...this._files }
    }


    updateSep (id:any, calle:any, numero:any, tipo:any, avatar:File) {
        const url =`${ this.baseUrl }/sepulturas/${id}`
        const formData = new FormData();
        formData.append('id', id);
        formData.append('file', avatar);
        formData.append('calle', calle);
        formData.append('numero', numero);
        formData.append('tipo', tipo)
        return this.http.put(url, formData, {
          headers: {
            //'Content-Type': 'application/json',
            'x-token': localStorage.getItem('token') || ''
          }
        });
      }
  


        uploadFile (id:any, calle:any, numero:any, tipo:any, avatar:File) {
        const url =`${ this.baseUrl }/sepulturas`
      const formData = new FormData();
      
      formData.append('file', avatar);
      formData.append('calle', calle);
      formData.append('numero', numero);
      formData.append('tipo', tipo) 

      return this.http.post(url, formData, {
        headers: {
          //'Content-Type': 'application/json',
          'x-token': localStorage.getItem('token') || ''
        }
      });
    }



    obtenerImagen (tipo:any, archivo:any){

      return this.http.get(`${ this.baseUrl }/uploads/${tipo}/${archivo}`)
      /* , {
        headers: {
          'x-token': localStorage.getItem('token') || ''
        }
      } */.pipe(
        map(resp => {console.log(resp)})
      )
    }

updatFile (file:any) {
  console.log(file)
  return this.http.put(`${ this.baseUrl }/sepulturas/${file}`, file)
}



crearLikes (usuarioId:any, fallecidoId:any, valor:any, mensaje:any)
{
  const url = `${ this.baseUrl}/likes/`;
  const body = { usuarioId, fallecidoId, valor, mensaje }
  
  return this.http.post<Likes>( url , body )


}

obtenerLikes (): Observable<Likes[]>
{
  console.log()
  const url = `${ this.baseUrl}/likes/`;
  
  return this.http.get<Likes[]>( url )
}

obtenerLikesIndividuales (fallecidoId:any): Observable<Likes[]>
{
  console.log()
  const url = `${ this.baseUrl}/likes/${fallecidoId}`;
  
  return this.http.get<Likes[]>( url )
}

}