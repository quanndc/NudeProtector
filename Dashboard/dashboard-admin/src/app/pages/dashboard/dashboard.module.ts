import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { NgApexchartsModule } from "ng-apexcharts";
import { DashboadbymonthComponent } from './dashboadbymonth/dashboadbymonth.component';
import { DashboadbydayComponent } from './dashboadbyday/dashboadbyday.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
  declarations: [
    DashboardComponent,
    NavbarComponent,
    DashboadbymonthComponent,
    DashboadbydayComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgApexchartsModule,
    MatButtonModule,
    MatMenuModule
  ],
  exports:[
    DashboardComponent,
    NavbarComponent,
    NgApexchartsModule

  ]
})
export class DashboardModule { }
