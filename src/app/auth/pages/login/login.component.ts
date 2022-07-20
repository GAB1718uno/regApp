import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import Swal  from "sweetalert2";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: []
})
export class LoginComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    email:['correosbasura2049@hotmail.com',[Validators.required, Validators.email]],
    password:['#617sonBBA#',[Validators.required, Validators.minLength(8)]],

  })
  
  
  
  constructor(
    private fb: FormBuilder,
    private router:Router,
    private _authSerice: AuthService,
  ) 
  { }

  ngOnInit(): void {
  }

  login(){

   /*  this._authSerice.validarToken()
    .subscribe(resp => console.log(resp)) */

    const { email, password } = this.miFormulario.value;
 
    this._authSerice.login( email, password )
    .subscribe( validado => {
      console.log(validado)

      if(validado === true){
      //this.router.navigateByUrl('/fallecidos/listado')
      this.router.navigateByUrl('/dashboard')
    
    }
    else {

      Swal.fire('Atención', validado, 'warning')
      console.log(validado)
    }
  }
  )

    
  }

}