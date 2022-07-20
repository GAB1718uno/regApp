import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SepulturasRoutingModule } from './sepulturas-routing.module';
import { AgregarSepComponent } from './pages/agregar-sep/agregar-sep.component';
import { MostrarSepComponent } from './pages/mostrar-sep/mostrar-sep.component';
import { EditarSepComponent } from './pages/editar-sep/editar-sep.component';
import { BuscarSepComponent } from './pages/buscar-sep/buscar-sep.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SepulturaComponent } from './pages/sepultura/sepultura.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AgregarSepComponent,
    MostrarSepComponent,
    EditarSepComponent,
    BuscarSepComponent,
    SepulturaComponent
  ],
  imports: [
    CommonModule,
    SepulturasRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    SharedModule
  ],
  exports:[
    SepulturaComponent,
    AgregarSepComponent
  ]
})
export class SepulturasModule { }
