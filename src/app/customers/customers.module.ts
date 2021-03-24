import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerRoutingModule } from './customers-routing.module';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { FormsModule } from '@angular/forms';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CustomerListComponent, CustomerDetailComponent, CustomerProfileComponent],
  imports: [
    SharedModule,
    CustomerRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    CustomerListComponent,
    CustomerDetailComponent,
    CustomerProfileComponent
  ]
})
export class CustomersModule { }
