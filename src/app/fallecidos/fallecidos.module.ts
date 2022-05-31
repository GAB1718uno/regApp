import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { EditarComponent } from './pages/editar/editar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { HomeComponent } from './pages/home/home.component';
import { FallecidosRoutingModule } from './fallecidos-routing.module';
import { FallecidosComponent } from './pages/fallecidos/fallecidos.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';
import { ImagenPipe } from './pipes/imagen.pipe';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { UbicacionComponent } from './pages/ubicacion/ubicacion.component';
import { PorapellidoComponent } from './pages/porapellido/porapellido.component';
import { PorsepulturaComponent } from './pages/porsepultura/porsepultura.component';




@NgModule({
  declarations: [
    AgregarComponent,
    EditarComponent,
    BuscarComponent,
    ListadoComponent,
    HomeComponent,
    FallecidosComponent,
    ImagenPipe,
    UbicacionComponent,
    PorapellidoComponent,
    PorsepulturaComponent
  ],
  imports: [
    CommonModule,
    FallecidosRoutingModule,
    FormsModule,
    FlexLayoutModule,
    MaterialModule,
    SharedModule
  ],
  exports:[
  ]
})
export class FallecidosModule { }
