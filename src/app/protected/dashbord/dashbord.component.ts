import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/service/auth.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styles: [
  ]
})
export class DashbordComponent implements OnInit {

  constructor(
    private router:Router,
    private authService:AuthService
  ) { }


  ngOnInit(): void {
  }

  get usuario (){
    return this.authService.usuario;
  }

  login(){
    this.router.navigateByUrl('/fallecidos/listado');
  }

  logout(){
    this.authService.logout();
    this.router.navigateByUrl('/auth/login');
  }

}
