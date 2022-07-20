import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComentariosRoutingModule } from './comentarios-routing.module';
import { ComentarioComponent } from './pages/comentario/comentario.component';
import { MostrarcomComponent } from './pages/mostrarcom/mostrarcom.component';
import { BuscarcomComponent } from './pages/buscarcom/buscarcom.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    ComentarioComponent,
  MostrarcomComponent,
BuscarcomComponent],
  imports: [
    CommonModule,
    ComentariosRoutingModule,
    MaterialModule
  ],
  exports: [
    ComentarioComponent
  ]
})
export class ComentariosModule { }
