import { NgModule } from '@angular/core';

//rutas
import {  PagesRoutingModule } from './pages-routing.module';
//Modulos
import { SharedModule } from '../shared/shared.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ChartsModule } from 'ng2-charts';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { GraficoComponent } from '../components/grafico/grafico.component';
import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';

@NgModule({
   declarations:[
    PagesComponent, 
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    GraficoComponent,
    AccoutSettingsComponent,
],
exports: [
   DashboardComponent,
   ProgressComponent,
   Graficas1Component,
   GraficoComponent,
],
imports:[
    SharedModule,
    PagesRoutingModule,
    ChartsModule
]
})
export class PagesModule { } 