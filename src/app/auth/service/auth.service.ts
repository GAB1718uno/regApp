import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuarios, AuthResponse } from '../interfaces/usuario.interface';
import { environment } from '../../../environments/environment';
import { catchError, map, of, tap, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  private baseUrl = environment.baseUrl;
  private _usuario!:Usuarios;

  get usuario(){
    return { ...this._usuario }
  }
  

  login( email:string,password:string ) {

    const url = `${ this.baseUrl}/usuarios`;
    const body = { email,password }
    return this.http.post<AuthResponse>( url, body )
    .pipe(
      tap(resp => {
        localStorage.setItem('token', resp.token!)
        
      }),
      /* map(
        resp => {
          console.log(resp.token)
          localStorage.setItem('token', resp.token!)
          this._usuario={
            usuario:resp.name!,
            uid:resp.uid!,
            email:resp.email!
          }
            return resp.ok
          }),
       */
      map(resp => resp.ok ),
      catchError(error => of(error.error.msg)
      )
      )
    }
    
    validarToken():Observable<boolean> {
      const header = new HttpHeaders()
      .set('x-token', localStorage.getItem('token') || '')
      const url = `${ this.baseUrl}/usuarios/renuevo`;
      return this.http.get<AuthResponse>(url, { headers: header })
      .pipe(
        map(
          resp => {
            console.log(resp.token)
            localStorage.setItem('token', resp.token!)
            this._usuario={
              usuario:resp.name!,
              uid:resp.uid!,
              email:resp.email!
            }
              return resp.ok
            }),
            catchError(err=> of(false))
            
            )
          }
          
          logout(){
            localStorage.clear();
          }
          
          registrar(usuario:string, password:string, email:string){
            const url = `${ this.baseUrl}/usuarios/nuevo`;
            const body = { usuario, password, email }
            
            return this.http.post<AuthResponse>( url , body )
            .pipe(
              tap(resp => {
              localStorage.setItem('token', resp.token!) 
              }),
              map(resp => resp.ok ),
              catchError(error => of(error.error.msg)
              )
              )

}
}