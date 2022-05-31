import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, map, Observable, switchMap } from 'rxjs';
import { Muertos } from '../interfaces/fallecidos.interface';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FallecidosService {

  
  constructor(private http:HttpClient,
    private activatedRoute : ActivatedRoute) { }

    private baseUrl = environment.baseUrl;
    private _muertos!:Muertos[];
  
    get muertos(){
      return { ...this._muertos }
    }
  
  
  
    agregarMuerto (name:any,apellidos:any,nacio:any,fallecio:any,mote:any,url:any,url2:any,sepult:any){
    const body = {name,apellidos,nacio,fallecio,mote,url,url2,sepult}
    console.log(body)  
    return this.http.post(`${ this.baseUrl }/muertos`, body);
      
  }

  obtenerTodosMuertos (): Observable<Muertos[]> {
    return this.http.get<Muertos[]>(`${ this.baseUrl}/muertos`)
  }

  obtenerMuertoPorId ( id: string ): Observable<Muertos> {
    return this.http.get<Muertos>(`${ this.baseUrl}/muertos/${ id }`)
  }

  obtenerMuertoCribados(termino:string, tipo:string):Observable<Muertos[]>{
    const url = `${ this.baseUrl}/muertos/busqueda/${ tipo }/${ termino }`;
    return this.http.get<Muertos[]>(url)
  }

  obtenerMuertoCribadosSepult(termino:string):Observable<Muertos[]>{
    const url = `${ this.baseUrl}/muertos/busqueda/sepultura/${ termino }`;
    return this.http.get<Muertos[]>(url)
  }


  obtenerRelacionados(id: string, sepult:string): Observable<Muertos[]> {

    const url = `${ this.baseUrl}/muertos/${ id }/${ sepult }`;
console.log(id);
    console.log(sepult);

    return this.http.get<Muertos[]>(url)
    /* .subscribe(resp => {


      this._muertos = resp
      
    }) */
    
    
    /* .pipe(
      map( 
        resp => resp
        )
    )
     */
    /* 
    .pipe(
      map(resp => resp as Muertos[] )
      
      ) */
      
  }

  actualizarMuerto (muerto:Muertos){
    return this.http.put(`${ this.baseUrl}/muertos/${muerto.id}`, muerto)
  }
  
}
