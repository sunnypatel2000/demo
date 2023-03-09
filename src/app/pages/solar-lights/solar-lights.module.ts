import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolarLightsRoutingModule } from './solar-lights-routing.module';
import { SolarLightsComponent } from './solar-lights.component';
import { ShareModule } from '../../share/share.module';


@NgModule({
  declarations: [SolarLightsComponent,
  ],
  imports: [
    CommonModule,
    SolarLightsRoutingModule,
    ShareModule
  ]
})
export class SolarLightsModule { }
