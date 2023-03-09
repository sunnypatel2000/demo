import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCatalogueComponent } from '../layout/product-catalogue/product-catalogue.component';
import { CommonBannerComponent } from '../layout/common-banner/common-banner.component';


@NgModule({
  declarations: [
    CommonBannerComponent,
    ProductCatalogueComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
     CommonBannerComponent,
    ProductCatalogueComponent
  ]
})
export class ShareModule { }
