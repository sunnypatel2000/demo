import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { DefaultLayoutComponent } from './layout/default-layout/default-layout.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "",
    component: DefaultLayoutComponent,
    //canActivate: [AuthGuard],
    data: {
      title: "Default"
    },
    children: [
      {
        path: "home",
        loadChildren: () => import("./pages/home/home.module").then(m => m.HomeModule)
      },
      {
        path: "about",
        loadChildren: () => import("./pages/about/about.module").then(m => m.AboutModule)
      },
      {
        path: "contact",
        loadChildren: () => import("./pages/contact/contact.module").then(m => m.ContactModule)
      },
      {
        path: "solar_panel",
        loadChildren: () => import("./pages/solar-panel/solar-panel.module").then(m => m.SolarPanelModule)
      },
      {
        path: "solar_pump",
        loadChildren: () => import("./pages/solar-pumps/solar-pumps.module").then(m => m.SolarPumpsModule)
      },
      {
        path: "solar_light",
        loadChildren: () => import("./pages/solar-lights/solar-lights.module").then(m => m.SolarLightsModule)
      },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true,
      scrollPositionRestoration: "enabled"
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
