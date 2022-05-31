import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { MainComponent } from './auth/pages/main/main.component';
import { HomeComponent } from './fallecidos/pages/home/home.component';

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
    path:'fallecidos',
    loadChildren:() => import('./fallecidos/fallecidos.module').then(m => m.FallecidosModule),
    //canActivate: [ ValidarTokenGuard ],
    //canLoad: [ ValidarTokenGuard ]
  
  },
  
  {
    path:'404',
    component:ErrorPageComponent
  },
  {
    path:'**',
    redirectTo:'404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
