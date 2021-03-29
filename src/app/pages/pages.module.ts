import { NgModule } from '@angular/core';

//rutas
import {  PagesRoutingModule } from './pages-routing.module';
//Modulos
import { SharedModule } from '../shared/shared.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';

import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';

@NgModule({
   declarations:[
    PagesComponent, 
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
],
exports: [
   DashboardComponent,
   ProgressComponent,
   Graficas1Component,
],
imports:[
    SharedModule,
    PagesRoutingModule
]
})
export class PagesModule { } 