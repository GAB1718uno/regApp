import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearUbicacionComponent } from './componentes/crear-ubicacion/crear-ubicacion.component';
import { HomeComponent } from '../fallecidos/pages/home/home.component';
const routes : Routes = [
{    path:'',
    component: HomeComponent,
    children:[
    
    {
        path:'ubicacion',
        component: CrearUbicacionComponent
    }]
}]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

export class SharedRoutingModule {}