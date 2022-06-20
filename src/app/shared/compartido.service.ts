import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Files } from '../fallecidos/interfaces/fallecidos.interface';
import { Observable, tap, map, switchMap } from 'rxjs';
import { Sepulturas } from './interfaces/sepulturas.interface';

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

    uploadFile (calle:any, numero:any, tipo:any, avatar:File) {
      
        //const url = `${ this.baseUrl }/uploads/${ tipo }`;
        const url =`${ this.baseUrl }/sepulturas`
        const formData = new FormData();
        formData.append('file', avatar);
        formData.append('calle', calle);
        formData.append('numero', numero);
        formData.append('tipo', tipo)


        return this.http.post(url, formData, {
          headers: {
            'Content-Type': 'application/json',
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

obtenerSepultura(id:any):Observable<Sepulturas>{
  const url =`${ this.baseUrl }/sepulturas/${id}`;
  return this.http.get<Sepulturas>(url)
}



}
