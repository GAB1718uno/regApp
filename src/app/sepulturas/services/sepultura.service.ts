import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Sepulturas } from '../interfaces/sepulturas.interface';


@Injectable({
  providedIn: 'root'
})
export class SepulturaService {

  constructor(private http:HttpClient) {}

  private baseUrl = environment.baseUrl;
  
  obtenerSepultura(id:any):Observable<Sepulturas>{
    const url =`${ this.baseUrl }/sepulturas/${id}`;
    return this.http.get<Sepulturas>(url)
  }
  
  obtenerSepulturas():Observable<Sepulturas[]>{
    const url =`${ this.baseUrl }/sepulturas`;
    return this.http.get<Sepulturas[]>(url)
  }
  
  eliminarSepultura(id:any){
    const url =`${ this.baseUrl }/sepulturas/${id}`;
    return this.http.delete<Sepulturas>(url)
  }
  
  editarSepultura(id:any){
    const url =`${ this.baseUrl }/sepulturas/${id}`;
    return this.http.get<Sepulturas>(url)
  
  }
}
