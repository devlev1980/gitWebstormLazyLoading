import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomersListComponent} from './customers-list.component';
import {CustomerResolver} from '../resolvers/customer-resolver';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';

const routes: Routes = [
  {
    path: '', component: CustomersListComponent,
    resolve: {
      customers: CustomerResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
