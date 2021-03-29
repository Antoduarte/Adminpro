import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { PagesComponent } from './pages/pages.component';
import { ProgressComponent } from './pages/progress/progress.component';

const routes: Routes = [
  {path:'',
   component:PagesComponent,
   children:[
    {path:'graficas1', component:Graficas1Component},
    {path:'progress', component:ProgressComponent},
    {path:'dashboard', component:DashboardComponent},
    {path:'', pathMatch:'full', redirectTo:'dashboard'},
   ]
  },
 
  {path:'login', component:LoginComponent},
  {path:'registro', component:RegisterComponent}, 
  {path:'**', component:NopagefoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
