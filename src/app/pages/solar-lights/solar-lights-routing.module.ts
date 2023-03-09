import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SolarLightsComponent } from './solar-lights.component';

const routes: Routes = [
  {
    path: '',
    component: SolarLightsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolarLightsRoutingModule { }
