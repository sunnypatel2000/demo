import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SolarPanelComponent } from '../solar-panel/solar-panel.component';

const routes: Routes = [
  {
    path: '',
    component: SolarPanelComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolarPanelRoutingModule { }
