import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolarPumpsRoutingModule } from './solar-pumps-routing.module';
import { SolarPumpsComponent } from './solar-pumps.component';
import { ShareModule } from '../../share/share.module';


@NgModule({
  declarations: [SolarPumpsComponent,
    //CommonBannerComponent
  ],
  imports: [
    CommonModule,
    SolarPumpsRoutingModule,
    ShareModule
  ]
})
export class SolarPumpsModule { }
