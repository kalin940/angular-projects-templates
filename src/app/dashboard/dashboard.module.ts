import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardBaseComponent } from './dashboard-base/dashboard-base.component';
import { DashboardRoutingModule } from './dashboard-routing.module';


@NgModule({
  declarations: [DashboardBaseComponent],
  imports: [
    SharedModule,
    DashboardRoutingModule,
    CoreModule
  ],
  exports: [
    DashboardBaseComponent
  ]
})
export class DashboardModule { }
