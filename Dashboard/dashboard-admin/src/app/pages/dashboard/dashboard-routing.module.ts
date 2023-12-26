import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DashboadbymonthComponent } from './dashboadbymonth/dashboadbymonth.component';
import { DashboadbydayComponent } from './dashboadbyday/dashboadbyday.component';

const routes: Routes = [{ path: '', component: DashboardComponent }];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
