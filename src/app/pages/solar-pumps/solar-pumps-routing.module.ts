import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SolarPumpsComponent } from './solar-pumps.component';

const routes: Routes = [
  {
    path: '',
    component: SolarPumpsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolarPumpsRoutingModule { }
