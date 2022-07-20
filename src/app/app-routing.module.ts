import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { MainComponent } from './auth/pages/main/main.component';
import { HomeComponent } from './fallecidos/pages/home/home.component';
import { ValidarTokenGuard } from './guards/validar-token.guard';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
    {
    path: 'auth',
    component:MainComponent,
    loadChildren:() => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path:'dashboard',
    loadChildren:() => import('./protected/protected.module').then(m => m.ProtectedModule),
    },
  {
    path:'shared',
    loadChildren:() => import('./shared/shared.module').then(m => m.SharedModule),
    canActivate: [ ValidarTokenGuard ],
    canLoad: [ ValidarTokenGuard ]
    },
  {
    path:'sepulturas',
    loadChildren:() => import('./sepulturas/sepulturas.module').then(m => m.SepulturasModule),
    canActivate: [ ValidarTokenGuard ],
    canLoad: [ ValidarTokenGuard ]
    },
  {
    path:'fallecidos',
    loadChildren:() => import('./fallecidos/fallecidos.module').then(m => m.FallecidosModule),
    canActivate: [ ValidarTokenGuard ],
    canLoad: [ ValidarTokenGuard ]
  
  },
  {
    path:'comentarios',
    loadChildren:() => import('./comentarios/comentarios.module').then(m => m.ComentariosModule),
    canActivate: [ ValidarTokenGuard ],
    canLoad: [ ValidarTokenGuard ]
  
  },
  
  {
    path:'404',
    component:ErrorPageComponent
  },
  {
    path:'**',
    redirectTo:'auth'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
