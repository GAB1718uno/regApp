import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../fallecidos/pages/home/home.component';

const routes : Routes = [
{    path:'',
    component: HomeComponent,
    children:[
    
   
    
]
}]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

export class SharedRoutingModule {}