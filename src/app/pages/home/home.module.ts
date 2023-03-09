import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
//import { ProductCatalogueComponent } from '../../layout/product-catalogue/product-catalogue.component';


@NgModule({
  declarations: [HomeComponent,
    //ProductCatalogueComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
