import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: []
})
export class RegistroComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    usuario: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  })


  constructor(private fb:FormBuilder,
              private _authService:AuthService,
              private router:Router) { }

  ngOnInit(): void {
  }


  registrar(){
  //this.router.navigateByUrl('/dashboard')

  const { usuario, password, email} = this.miFormulario.value;
   this._authService.registrar( usuario, password, email)
   .subscribe(validado => {

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

    console.log(this.miFormulario.value)
  }

}