import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstacionamientosComponent } from './pages/estacionamientos/estacionamientos.component';
import { FullScreenComponent } from './pages/full-screen/full-screen.component';
import { MarcadoresComponent } from './pages/marcadores/marcadores.component';
import { ZoomRangeComponent } from './pages/zoom-range/zoom-range.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {path:'fullscreen', component: FullScreenComponent},
      {path:'zoom-range', component: ZoomRangeComponent},
      {path:'marcadores', component: MarcadoresComponent},
      {path:'estacionamientos', component: EstacionamientosComponent},
      {path:'**', redirectTo: 'fullscreen'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapasRoutingModule { }
