import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../fallecidos/pages/home/home.component';
import { ComentarioComponent } from './pages/comentario/comentario.component';
import { MostrarcomComponent } from './pages/mostrarcom/mostrarcom.component';
import { BuscarcomComponent } from './pages/buscarcom/buscarcom.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
    children: [{
      path:'comentario',
      component:ComentarioComponent
    },
  {
    path:'mostrarcom',
    component:MostrarcomComponent
  }
, {
  path:'buscarcom',
  component: BuscarcomComponent
}]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComentariosRoutingModule { }

