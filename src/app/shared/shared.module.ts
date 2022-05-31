import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RelacionadosComponent } from './relacionados/relacionados.component';
import { FallecidosTarjetaComponent } from './componentes/fallecidos-tarjeta.component';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { TemporalComponent } from './componentes/temporal/temporal.component';
import { DetalleFallecidoComponent } from './componentes/detalle-fallecido/detalle-fallecido.component';
import { UbicacionComponent } from './componentes/ubicacionreal/ubicacionreal.component';
import { CrearUbicacionComponent } from './componentes/crear-ubicacion/crear-ubicacion.component';



@NgModule({
  declarations: [
    RelacionadosComponent,
    FallecidosTarjetaComponent,
    TemporalComponent,
    DetalleFallecidoComponent,
    UbicacionComponent,
    CrearUbicacionComponent

  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule
  ],
  exports:[
    RelacionadosComponent,
    FallecidosTarjetaComponent,
    TemporalComponent,
    DetalleFallecidoComponent,
    UbicacionComponent,
    CrearUbicacionComponent
]
})
export class SharedModule { }
