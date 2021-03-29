
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';

const routesPages: Routes = [
    {path:'', 
    component:PagesComponent,
    children:[
        {path:'graficas1', component:Graficas1Component},
        {path:'progress', component:ProgressComponent},
        {path:'dashboard', component:DashboardComponent},
        {path:'', pathMatch:'full', redirectTo:'dashboard'},
       ]}    
  ];

  @NgModule({
    imports: [RouterModule.forChild(routesPages)],
    exports: [RouterModule]
  })
  export class PagesRoutingModule { }