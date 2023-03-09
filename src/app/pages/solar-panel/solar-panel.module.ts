import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolarPanelRoutingModule } from './solar-panel-routing.module';
import { SolarPanelComponent } from '../solar-panel/solar-panel.component';
import { CommonBannerComponent } from '../../layout/common-banner/common-banner.component';
import { ProductCatalogueComponent } from '../../layout/product-catalogue/product-catalogue.component';
import { ShareModule } from '../../share/share.module';

@NgModule({
  declarations: [SolarPanelComponent,
    //CommonBannerComponent,
   //ProductCatalogueComponent
  ],
  imports: [
    CommonModule,
    SolarPanelRoutingModule,
    ShareModule
  ],
})
export class SolarPanelModule { }
