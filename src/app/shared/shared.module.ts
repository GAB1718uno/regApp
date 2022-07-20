import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RelacionadosComponent } from './relacionados/relacionados.component';
import { FallecidosTarjetaComponent } from './componentes/fallecidos-tarjeta.component';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { TemporalComponent } from './componentes/temporal/temporal.component';
import { DetalleFallecidoComponent } from './componentes/detalle-fallecido/detalle-fallecido.component';
import { SharedRoutingModule } from './shared-routing.module';
import { SepulturasTarjetaComponent } from './componentes/sepulturas-tarjeta/sepulturas-tarjeta.component';
import { ComentariosModule } from '../comentarios/comentarios.module';



@NgModule({
  declarations: [
    RelacionadosComponent,
    FallecidosTarjetaComponent,
    TemporalComponent,
    DetalleFallecidoComponent,
    SepulturasTarjetaComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule,
    SharedRoutingModule,
    ComentariosModule
  ],
  exports:[
    RelacionadosComponent,
    FallecidosTarjetaComponent,
    TemporalComponent,
    DetalleFallecidoComponent,
    SepulturasTarjetaComponent
]
})
export class SharedModule { }
