import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../fallecidos/pages/home/home.component';
import { AgregarSepComponent } from './pages/agregar-sep/agregar-sep.component';
import { MostrarSepComponent } from './pages/mostrar-sep/mostrar-sep.component';
import { EditarSepComponent } from './pages/editar-sep/editar-sep.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    children:[
      {
        path:'mostrarsep',
        component:MostrarSepComponent
      },
      
      {
        path:'agregarsep',
        component:AgregarSepComponent
      },
      
      {
        path:'editarsep/:id',
        component:EditarSepComponent
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SepulturasRoutingModule { }