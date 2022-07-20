import { NgModule } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatExpansionModule} from '@angular/material/expansion';




@NgModule({

  exports:[
ReactiveFormsModule,    
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
MatSidenavModule,
MatToolbarModule,
MatButtonModule,
MatIconModule,
MatInputModule,
MatListModule,
MatProgressSpinnerModule,
MatGridListModule,
MatCardModule,
MatExpansionModule,

  ]
})
export class MaterialModule { }