import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardBaseComponent } from './dashboard-base/dashboard-base.component';

const routes: Routes = [
    {
      path: '',
      component: DashboardBaseComponent
    }
  ];
@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class DashboardRoutingModule { }
