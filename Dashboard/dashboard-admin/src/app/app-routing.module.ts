import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboadbymonthComponent } from './pages/dashboard/dashboadbymonth/dashboadbymonth.component';
import { DashboadbydayComponent } from './pages/dashboard/dashboadbyday/dashboadbyday.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
  { path: 'dashboard', loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule), }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
