import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import {CustomersListComponent} from './customers-list.component';
import {SharedModule} from '../shared.module';

@NgModule({
  imports: [
    CommonModule,
    CustomersRoutingModule,
    SharedModule.forRoot()

  ],
  declarations: [CustomersListComponent],
})
export class CustomersModule {

}
