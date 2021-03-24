import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';

const routes: Routes = [
    {
      path: '',
      component: CustomerListComponent
    },
    {
        path: 'detail',
        component: CustomerDetailComponent
    },
    {
      path: 'profile',
      component: CustomerProfileComponent
    }
  ];
@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class CustomerRoutingModule { }
